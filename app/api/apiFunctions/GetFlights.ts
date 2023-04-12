import { SearchParamsProps } from "@/interfces/SearchParamsProps";

export const GET_flights = async ({
  from,
  to,
  adults,
  departure,
  currencyCode,
}: SearchParamsProps) => {
  const data = await fetch(`${process.env.API_ENDPOINT}`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      CatalogOfferingsRequestAir: {
        offersPerPage: 1,
        PassengerCriteria: [
          {
            value: "ADT",
            number: 1,
          },
        ],
        PricingModifiersAir: {
          currencyCode: "USD",
        },
        SearchCriteriaFlight: [
          {
            "@type": "SearchCriteriaFlight",
            departureDate: departure,
            From: {
              value: "BGW",
            },
            To: {
              value: "CAI",
            },
          },
        ],
      },
    }),
  });

  return data;
};
