import { rest } from "msw";
import marketingPlugins from "../data/marketing/marketing.data.json";
import financePlugins from "../data/finance/finance.data.json";
import personnelPlugins from "../data/personnel/personnel.data.json";
import allPlugins from "../data/all-plugins/all-plugins.data.json";

const handlers = [
  rest.get("/api/plugins", (req, res, ctx) => {
    return res(ctx.json(allPlugins));
  }),
  rest.get("/api/plugins/marketing", (req, res, ctx) => {
    return res(ctx.json(marketingPlugins));
  }),

  rest.put("/api/plugins/marketing/:id", (req, res, ctx) => {
    const { id } = req.params;
    const updatedData = req.body;
    return res(
      ctx.status(200),
      ctx.json({ message: "Data updated successfully", updatedData, pluginId: id })
    );
  }),

  rest.get("/api/plugins/finance", (req, res, ctx) => {
    return res(ctx.json(financePlugins));
  }),

  rest.put("api/plugins/finance/:id", (req, res, ctx) => {
    const { id } = req.params;
    const updatedData = req.body;

    return res(
      ctx.status(200),
      ctx.json({ message: "Data updated successfully", updatedData, pluginId: id })
    );
  }),

  rest.get("/api/plugins/personnel", (req, res, ctx) => {
    return res(ctx.json(personnelPlugins));
  }),

  rest.put("/api/plugins/personnel/:id", (req, res, ctx) => {
    const { id } = req.params;
    const updatedData = req.body;

    return res(
      ctx.status(200),
      ctx.json({ message: "Data updated successfully", updatedData, pluginId: id })
    );
  }),
];
export default handlers;
