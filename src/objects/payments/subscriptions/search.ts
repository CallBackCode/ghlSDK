import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type {
  PaymentsSubscriptionListResponseDTO,
  PaymentsSubscriptionsSearchOptions,
  PaymentsSubscriptionsSearchParams,
} from "../../../types/payments";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/payments/subscriptions";

type ResponseTypes =
  | PaymentsSubscriptionListResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const search = async (
  options: PaymentsSubscriptionsSearchOptions,
  authToken: string
): Promise<ResponseTypes> | null => {
  const {
    contactId,
    endAt,
    entityId,
    entitySourceType,
    id,
    limit,
    offset,
    paymentMode,
    search,
    startAt,
    altId,
    altType,
  } = options;

  const executeRequest = async () => {
    let params: PaymentsSubscriptionsSearchParams = {
      altId,
      altType,
    };
    if (contactId) params.contactId = contactId.toString();
    if (endAt) params.endAt = endAt.toString();
    if (limit) params.limit = limit.toString();
    if (offset) params.offset = offset.toString();
    if (paymentMode) params.paymentMode = paymentMode.toString();
    if (search) params.search = search.toString();
    if (startAt) params.startAt = startAt.toString();
    if (entityId) params.entityId = entityId.toString();
    if (entitySourceType) params.entitySourceType = entitySourceType.toString();
    if (id) params.id = id.toString();

    const URL = `${baseUrl}?` + new URLSearchParams(params);
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Version: "2021-07-28",
        Authorization: `Bearer ${authToken}`,
      },
    });
    const data: ResponseTypes = await response.json();
    return data;
  };

  try {
    return await withExponentialBackoff(executeRequest);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default search;
