import { NextResponse } from "next/server";

const key = process.env.STRIPE_SECRET_KEY || "";

// 没配真实 key → 模拟模式（开发用）
function isTestMode() {
  return !key || !key.startsWith("sk_");
}

export async function POST() {
  if (isTestMode()) {
    console.log("🧪 [TEST MODE] 模拟 Stripe Checkout 成功");
    return NextResponse.json({
      url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/?success=true`,
    });
  }

  const Stripe = (await import("stripe")).default;
  const stripe = new Stripe(key, { apiVersion: "2024-06-20" });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "subscription",
    line_items: [
      {
        price: process.env.STRIPE_PRICE_ID!,
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/?canceled=true`,
  });

  return NextResponse.json({ url: session.url });
}
