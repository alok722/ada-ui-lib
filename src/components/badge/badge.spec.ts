import { newSpecPage } from "@stencil/core/testing";
import { Badge } from "./badge";

describe("ada-badge", () => {
  it("renders the default component", async () => {
    const { root } = await newSpecPage({
      components: [Badge],
      html: "<ada-badge></ada-badge>",
    });

    expect(root).toEqualHtml(`
      <ada-badge>
        <mock:shadow-root>
        <span class="badge default"></span>
        </mock:shadow-root>
      </ada-badge>
    `);
  });

  it("renders the success type badge with value 88", async () => {
    const { root } = await newSpecPage({
      components: [Badge],
      html: '<ada-badge variant="success" text="88"></ada-badge>',
    });

    expect(root).toEqualHtml(`
      <ada-badge text="88" variant="success">
        <mock:shadow-root>
        <span class="badge success">88</span>
        </mock:shadow-root>
      </ada-badge>
    `);
  });
});
