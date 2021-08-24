export const swaggerDocument = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "REST API - Hash Challenge",
    description:
      "",
    termsOfService: "",
  },
  components: {
    schemas: {
      Checkout: {
        type: "object",
        properties: {
          products: {
            type: "array",
            items: {
              type: "object",
              properties: {
                quantity: { type: "integer" },
                id: { type: "integer" }
              },
            },
          },
        },
        required: ["products"],
        xml: {
          name: "Checkout",
        },
      }
    }
  },
  tags: [
    {
      name: "checkout"
    }
  ],
  paths: {
    "/checkout": {
      post: {
        tags: ["checkout"],
        summary: "Checkout cart",
        description: "Processar um carrinho no sistema",
        operationId: "checkout",
        requestBody: {
          description: "Products list",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Checkout",
              },
            },
          },
          required: true,
        },
        responses: {
          default: {
            status: "201",
            content: {
              "application/json": {
                schema: {
                  properties: {
                    total_amount: { type: "integer" },
                    total_amount_with_discount: { type: "integer" },
                    total_discount: { type: "integer" },
                    products: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          id: { type: "integer" },
                          quantity: { type: "integer" },
                          unit_amount: { type: "integer" },
                          total_amount: { type: "integer" },
                          discount: { type: "integer" },
                          is_gift: { type: "boolean" }
                        }
                      }
                    }
                  }
                }
              }
            },
          },
          400: {
            description: "Informe todos os campos",
          },
        },
        "x-codegen-request-body-name": "body",
      }
    }
  }
}