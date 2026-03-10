import { Client, Environment } from "@square/square";

export default async function handler(req, res) {
  const { cart } = JSON.parse(req.body);

  const client = new Client({
    accessToken: process.env.SQUARE_ACCESS_TOKEN,
    environment: Environment.Production
  });

  const items = cart.map((item) => ({
    name: item.name,
    quantity: "1",
    basePriceMoney: {
      amount: Math.round(item.price * 100),
      currency: "USD"
    }
  }));

  const response = await client.checkoutApi.createCheckout(
    process.env.SQUARE_LOCATION_ID,
    {
      idempotencyKey: crypto.randomUUID(),
      order: { lineItems: items },
      redirectUrl: "https://infin8grips.com/thanks"
    }
  );

  res.status(200).json({
    checkoutUrl: response.result.checkout.checkoutPageUrl
  });
}

