// Type-level check: a real GHL contact payload (address1) must assign to ContactDTO.
// Run: npm run typecheck
import type { ContactDTO } from "../src/types/contacts.js";

const fromApi: ContactDTO = { id: "abc", address1: "123 Main Street", city: "New York" };
const street: string | undefined = fromApi.address1;
const legacy: ContactDTO = { address: "123 Main Street" };
// Exact-type assertion: address1 is string | undefined.
type Eq<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false;
const addr1IsString: Eq<ContactDTO["address1"], string | undefined> = true;
export { street, legacy, addr1IsString };
