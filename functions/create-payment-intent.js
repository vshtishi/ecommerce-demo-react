exports.handler = async function (event, context) {
  if (event.body) {
    const { cart, total_amount } = JSON.parse(event.body)
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
