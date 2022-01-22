require('dotenv').config()

const stripe = require('sripe')(process.env.REACT_APP_STRIPE_SECRET_KEY)

exports.handler = async function (event, context) {
  //check if POST
  if (event.body) {
    const { cart, total_amount } = JSON.parse(event.body)

    const getOrderAmount = () => {
      return total_amount
    }

    try {
      const paymentIntent = await stripe.pamentIntents.create({
        amount: getOrderAmount(),
      })
    } catch (error) {}

    return {
      statusCode: 200,
      body: JSON.stringify(cart),
    }
  }
  return {
    statusCode: 200,
    body: 'Create payment intent',
  }
}
