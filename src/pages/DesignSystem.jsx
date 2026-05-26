import Layout from "../components/Layout";
import Footer from "../components/Footer";

export default function DesignSystem({ isLoading }) {
  const grayLight = [
    ["grayLight-0", "#FFFFFF"],
    ["grayLight-10", "#FDFDFD"],
    ["grayLight-50", "#FAFAFA"],
    ["grayLight-100", "#F4F4F4"],
    ["grayLight-200", "#E4E4E4"],
    ["grayLight-300", "#CFCFCF"],
    ["grayLight-400", "#A8A8A8"],
    ["grayLight-500", "#8C8C8C"],
    ["grayLight-600", "#6E6E6E"],
    ["grayLight-700", "#4F4F4F"],
    ["grayLight-800", "#333333"],
    ["grayLight-900", "#050505"],
  ];

  const grayDark = [
    ["grayDark-0", "#000000"],
    ["grayDark-10", "#050505"],
    ["grayDark-50", "#1A1A1A"],
    ["grayDark-100", "#2C2C2C"],
    ["grayDark-200", "#3D3D3D"],
    ["grayDark-300", "#555555"],
    ["grayDark-400", "#707070"],
    ["grayDark-500", "#8A8A8A"],
    ["grayDark-600", "#A5A5A5"],
    ["grayDark-700", "#C0C0C0"],
    ["grayDark-800", "#DADADA"],
    ["grayDark-900", "#F0F0F0"],
  ];

  return (
    <Layout footer={<Footer />}>
      <main>
        {/* Hero */}
        <section className="mb-12 mt-24">
          <div>
            <h6>Design System</h6>

            <h1>
              A living guide for maintaining and evolving my portfolio’s visual
              system.
            </h1>

            <p>
              This page documents the visual language, reusable patterns, and
              content structures used throughout the site while helping identify
              inconsistencies and opportunities for refinement.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="mb-12">
          <div>
            <h6>01 / Overview</h6>

            <h2>What this page is for</h2>

            <div>
              <p>
                This page acts as a working reference for the visual and content
                systems used across my portfolio.
              </p>

              <p>
                It is intended to help maintain consistency across pages,
                document reusable patterns, and guide future design and
                development decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Visual Language */}
        <section className="mb-12">
          <div>
            <h6>02 / Visual Language</h6>

            <h2>Foundations</h2>

            <div>
              <div>
                <h3>Color</h3>

                <div className="mt-4">
                  <h4>Light Grays</h4>

                  <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                    {grayLight.map(([name, hex]) => (
                      <div key={name}>
                        <div
                          className="h-24 rounded-xl border border-grayLight-200 dark:border-grayDark-200"
                          style={{ backgroundColor: hex }}
                        />

                        <p>{name}</p>
                        <p>{hex}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h4>Dark Grays</h4>

                  <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                    {grayDark.map(([name, hex]) => (
                      <div key={name}>
                        <div
                          className="h-24 rounded-xl border border-grayLight-200 dark:border-grayDark-200"
                          style={{ backgroundColor: hex }}
                        />

                        <p>{name}</p>
                        <p>{hex}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
              <h3>Typography</h3>
              <div>
                
                <div className="mb-4" >
                <h1>Heading 1</h1>
                <p>h1 / text-3xl md:text-4xl / semibold / tight leading</p>
                </div>

                <div className="mb-4">
                <h2>Heading 2</h2>
                <p>h2 / text-2xl md:text-3xl / medium / tight leading</p>
                </div>

                <div className="mb-4">
                <h3>Heading 3</h3>
                <p>h3 / text-lg / semibold</p>
                </div>

                <div className="mb-4">
                <h4>Heading 4</h4>
                <p>h4 / text-base / medium</p>
                </div>

                <div className="mb-4">
                <h5>Heading 5</h5>
                <p>h5 / text-sm / medium</p>
                </div>

                <div className="mb-4">
                <h6>Heading 6</h6>
                <p>h6 / text-xs / mono / uppercase label</p>
                </div>

                <div className="mb-4">
                <p>
                    Body text is used for standard paragraphs, project descriptions, case
                    study explanations, and supporting content across the site.
                </p>
                <p>p / text-sm md:text-base / relaxed leading</p>
                </div>
            </div>
            </div>

              <div>
                <h3>Spacing</h3>
              </div>

              <div>
                <h3>Radius</h3>
              </div>

              <div>
                <h3>Borders</h3>
              </div>

              <div>
                <h3>Shadows</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Reusable Patterns */}
        <section className="mb-12">
          <div>
            <h6>03 / Reusable Patterns</h6>

            <h2>Components</h2>

            <div>
              <div>
                <h3>Buttons</h3>
              </div>

              <div>
                <h3>Meta Pills</h3>
              </div>

              <div>
                <h3>Cards</h3>
              </div>

              <div>
                <h3>Navigation</h3>
              </div>

              <div>
                <h3>Footer</h3>
              </div>

              <div>
                <h3>Case Study Sections</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Content Patterns */}
        <section>
          <div>
            <h6>04 / Content Patterns</h6>

            <h2>Content Structure</h2>

            <div>
              <div>
                <h3>Headings</h3>
              </div>

              <div>
                <h3>Captions</h3>
              </div>

              <div>
                <h3>Labels</h3>
              </div>

              <div>
                <h3>CTAs</h3>
              </div>

              <div>
                <h3>Project Summaries</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}