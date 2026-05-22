import { FaqItem } from "@/lib/seo-utils";

export function FAQSection({ items }: { items: FaqItem[] }) {
  return (
    <section className="mt-16 border-t border-gray-800 pt-12">
      <h2 className="text-2xl font-semibold mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {items.map((item, i) => (
          <details
            key={i}
            className="bg-gray-900 p-5 rounded-lg cursor-pointer"
          >
            <summary className="font-medium text-white">
              {item.question}
            </summary>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
