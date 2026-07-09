import { Check } from "lucide-react";
import type { MembershipPlan } from "@/types/district";

type MembershipPlanCardProps = {
  plan: MembershipPlan;
};

export function MembershipPlanCard({ plan }: MembershipPlanCardProps) {
  return (
    <article className="rounded-lg border border-urban-100 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-petrol-900">{plan.name}</h3>
      <p className="mt-2 text-sm leading-6 text-urban-700">{plan.description}</p>
      <p className="mt-4 text-sm font-bold text-gold-500">{plan.priceLabel}</p>
      <ul className="mt-4 grid gap-2 text-sm text-urban-700">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Check className="mt-0.5 shrink-0 text-green-700" size={16} aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}
