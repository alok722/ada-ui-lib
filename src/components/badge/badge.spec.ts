import { newSpecPage } from "@stencil/core/testing";
import { Badge } from "./badge";

describe("gl-badge", () => {
  it("renders the default component", async () => {
    const { root } = await newSpecPage({
      components: [Badge],
      html: "<gl-badge></gl-badge>",
    });

    expect(root).toEqualHtml(`
      <gl-badge>
        <mock:shadow-root>
        <span class="badge default"></span>
        </mock:shadow-root>
      </gl-badge>
    `);
  });

  it("renders the success type badge with value 88", async () => {
    const { root } = await newSpecPage({
      components: [Badge],
      html: '<gl-badge variant="success" text="88"></gl-badge>',
    });

    expect(root).toEqualHtml(`
      <gl-badge text="88" variant="success">
        <mock:shadow-root>
        <span class="badge success">88</span>
        </mock:shadow-root>
      </gl-badge>
    `);
  });
});
