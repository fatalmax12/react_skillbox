module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "\\.(css)": "identity-obj-proxy",
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
};
