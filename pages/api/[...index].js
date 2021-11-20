import { OpenAPIBackend } from 'openapi-backend';

const api = new OpenAPIBackend({
  definition: "https://raw.githubusercontent.com/wso2/carbon-apimgt/tmkasun-patch-1/components/apimgt/org.wso2.carbon.apimgt.rest.api.publisher.v1/src/main/resources/publisher-api.yaml",
});

// api.register('notFound', (c, res, ctx) => res(ctx.status(404)));
api.register('notImplemented', async (c, res, ctx) => {
  const { status, mock } = await api.mockResponseForOperation(c.operation.operationId);
  return res(ctx.status(status), ctx.json(mock));
});
api.register('validationFail', (c, req, res) => res.status(400).json({ err: c.validation.errors }))
export default async function handler(req, res) {
  const { method } = req
  const path = `/${req.query.index.join('/')}`
  const oasRequest = {
    path: '/apis',
    method: 'GET'
  };
  mockedResponse = await api.handleRequest(oasRequest, req, res);
  debugger
  res.status(200).json({ "a": 'asd' })
}
