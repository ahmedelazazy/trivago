module.exports = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Trivago Hotelier API",
      description: "API to list hoteliers and list/add/edit/delete items of given hotelier",
      contact: {
        name: "Ahmed Elazazy",
      },
    },
    basePath: "/api/v1/",
  },
  apis: ["./routes/**/*.js"],
};
