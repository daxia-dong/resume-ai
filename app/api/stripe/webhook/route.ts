import { headers } from "next/headers";
import { NextResponse } from "next/server";

let stripeInstance: any = null;

function getStripe() {
  if (!stripeInstance) {
    const Stripe = require("stripe");
    const key = process.env.STRIPE_SECRET_KEY || "";
    stripeInstance = new Stripe(key, { apiVersion: "2026-04-22.dahlia" });
  }
  return stripeInstance;
}

export async function POST(req: Request) {
  // Stripe key 没配 → 模拟模式
  if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY.includes("***")) {
    console.log("🧪 [TEST MODE] Webhook 模拟");
    return NextResponse.json({ received: true });
  }

  const body = await req.text();
  const headersList = await headers();
  const sig = headersList.get("stripe-signature") as string;

  const stripe = getStripe();
  let event: any;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    console.log("💰 Payment successful:", session.customer_email);
  }

  return NextResponse.json({ received: true });
}
