import { benefits, businesses } from "@/lib/data";

export async function getPublicBusinesses() {
  return businesses;
}

export async function getMapBusinesses() {
  return businesses;
}

export async function getPublicBenefits() {
  return benefits;
}
