(() => {
  "use strict";

  const APP_ID = "poorvu-cam-prototype";

  function initializeApp() {
    const appRoot = document.getElementById(APP_ID);
    if (!appRoot || appRoot.dataset.epaInitialized === "true") return;

    appRoot.dataset.epaInitialized = "true";
    appRoot.innerHTML = "<main class=\"epa-page\">\n<section aria-labelledby=\"epa-team-title\" class=\"epa-team\">\n<div class=\"epa-section-inner epa-team__layout\">\n<div class=\"epa-team__copy\">\n<h1 class=\"epa-team__title\" id=\"epa-team-title\">\n            The Educational Program Assessment (EPA) team\n          </h1>\n<p class=\"epa-team__intro\">\n            The Educational Program Assessment (EPA) team provides expertise in the design, implementation, analysis, and reporting of assessments that explore the impact of teaching and learning programs on campus.\n          </p>\n</div>\n<div class=\"epa-facets\">\n<div class=\"epa-facet-tabs\">\n<button aria-pressed=\"true\" class=\"epa-facet epa-facet--collaboration is-active\" data-epa-facet=\"collaboration\" type=\"button\">\n<span class=\"epa-facet__label\">Strong collaborations</span>\n</button>\n<button aria-pressed=\"false\" class=\"epa-facet epa-facet--methods\" data-epa-facet=\"methods\" type=\"button\">\n<span class=\"epa-facet__label\">Educational research design that emphasizes mixed methodologies</span>\n</button>\n<button aria-pressed=\"false\" class=\"epa-facet epa-facet--backgrounds\" data-epa-facet=\"backgrounds\" type=\"button\">\n<span class=\"epa-facet__label\">Learning science, cognitive psychology, and neuroscience</span>\n</button>\n<button aria-pressed=\"false\" class=\"epa-facet epa-facet--rigor\" data-epa-facet=\"rigor\" type=\"button\">\n<span class=\"epa-facet__label\">Rigorous and Realistic Assessment</span>\n</button>\n</div>\n<div aria-live=\"polite\" class=\"epa-facet-detail\">\n<p class=\"epa-facet-detail__label\">Strong collaborations</p>\n<h2 class=\"epa-facet-detail__title\">Our assessment work is built on strong collaborations.</h2>\n<p class=\"epa-facet-detail__text\">\n              Most projects begin with a consultation with us where you can share ideas and meet a member of our team. Strong communication with program leaders that allows reflection and iteration based on the data is a hallmark of this model.\n            </p>\n</div>\n</div>\n</div>\n</section>\n<section aria-labelledby=\"assessment-definition-title\" class=\"assessment-definition\">\n<div class=\"epa-section-inner assessment-definition__layout\">\n<div class=\"assessment-definition__copy\">\n<h2 class=\"assessment-definition__title\" id=\"assessment-definition-title\">\n            What is Educational Program Assessment?\n          </h2>\n<p class=\"assessment-definition__text\">\n            Educational program assessment is the process of systematically\n            <span class=\"assessment-source-phrase assessment-phrase--collecting\">collecting</span>,\n            <span class=\"assessment-source-phrase assessment-phrase--analyzing\">analyzing</span>, and\n            <span class=\"assessment-source-phrase assessment-phrase--using\">using data</span> to\n            <span class=\"assessment-source-phrase assessment-phrase--purpose\">understand and improve the activities and outcomes of a program</span>.\n            In educational contexts, program assessments usually extend beyond a single course to look at overarching questions related to educational initiatives.\n          </p>\n</div>\n<div class=\"assessment-visual\">\n<div class=\"assessment-purpose-field\">\n<button aria-pressed=\"false\" class=\"assessment-purpose-core\" data-assessment-id=\"purpose\" type=\"button\">\n<span>Understand and improve the activities and outcomes of a program</span>\n</button>\n<button aria-pressed=\"false\" class=\"assessment-data-action assessment-action--collecting\" data-assessment-id=\"collecting\" type=\"button\">\n              Collecting data\n            </button>\n<button aria-pressed=\"false\" class=\"assessment-data-action assessment-action--analyzing\" data-assessment-id=\"analyzing\" type=\"button\">\n              Analyzing data\n            </button>\n<button aria-pressed=\"false\" class=\"assessment-data-action assessment-action--using\" data-assessment-id=\"using\" type=\"button\">\n              Using data\n            </button>\n</div>\n<p class=\"assessment-outcomes-heading\">They can be used to:</p>\n<div class=\"assessment-outcomes\">\n<button aria-pressed=\"false\" class=\"assessment-outcome assessment-outcome--one\" data-assessment-id=\"outcome-one\" type=\"button\">\n<span>Identify methods of improving the approach or quality of educational activities</span>\n</button>\n<button aria-pressed=\"false\" class=\"assessment-outcome assessment-outcome--two\" data-assessment-id=\"outcome-two\" type=\"button\">\n<span>Provide feedback to students, faculty, and administrators about their efforts</span>\n</button>\n<button aria-pressed=\"false\" class=\"assessment-outcome assessment-outcome--three\" data-assessment-id=\"outcome-three\" type=\"button\">\n<span>Ensure that programs are meeting their aims and functioning well</span>\n</button>\n</div>\n</div>\n</div>\n</section>\n<section aria-labelledby=\"epa-help-title\" class=\"epa-help\">\n<div class=\"epa-section-inner\">\n<h2 class=\"epa-help__title\" id=\"epa-help-title\">How EPA can help</h2>\n<nav aria-label=\"EPA service areas\" class=\"epa-gateway-hall\">\n<a class=\"epa-gateway epa-gateway--consultation\" href=\"https://poorvucenter.yale.edu/assessment/educational-program-assessment/consultations-support\" target=\"_top\">\n<span aria-hidden=\"true\" class=\"epa-gateway__frame\"></span>\n<span class=\"epa-gateway__content\">\n<span aria-hidden=\"true\" class=\"epa-gateway__mark\">\n<svg fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\">\n<path d=\"M4 5h16v11H8l-4 4V5z\"></path>\n<path d=\"M8 9h8M8 12h5\"></path>\n</svg>\n</span>\n<span class=\"epa-gateway__title\">Consultation and project planning</span>\n<span aria-hidden=\"true\" class=\"epa-gateway__arrow\">\u2192</span>\n</span>\n</a>\n<a class=\"epa-gateway epa-gateway--design\" href=\"#assessment-design\">\n<span aria-hidden=\"true\" class=\"epa-gateway__frame\"></span>\n<span class=\"epa-gateway__content\">\n<span aria-hidden=\"true\" class=\"epa-gateway__mark\">\n<svg fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\">\n<path d=\"M5 19h14M7 16l8-8 3 3-8 8H7z\"></path>\n<path d=\"M13 10l3 3\"></path>\n</svg>\n</span>\n<span class=\"epa-gateway__title\">Assessment design</span>\n<span aria-hidden=\"true\" class=\"epa-gateway__arrow\">\u2193</span>\n</span>\n</a>\n<a class=\"epa-gateway epa-gateway--data\" href=\"#data-collection\">\n<span aria-hidden=\"true\" class=\"epa-gateway__frame\"></span>\n<span class=\"epa-gateway__content\">\n<span aria-hidden=\"true\" class=\"epa-gateway__mark\">\n<svg fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\">\n<path d=\"M5 5h14v14H5z\"></path>\n<path d=\"M8 9h8M8 12h5M8 15h7\"></path>\n</svg>\n</span>\n<span class=\"epa-gateway__title\">Data collection, including surveys, interviews, and mixed methods</span>\n<span aria-hidden=\"true\" class=\"epa-gateway__arrow\">\u2193</span>\n</span>\n</a>\n<a class=\"epa-gateway epa-gateway--analysis\" href=\"#analysis-reporting\">\n<span aria-hidden=\"true\" class=\"epa-gateway__frame\"></span>\n<span class=\"epa-gateway__content\">\n<span aria-hidden=\"true\" class=\"epa-gateway__mark\">\n<svg fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\">\n<path d=\"M5 19V9M10 19V5M15 19v-7M20 19V8\"></path>\n</svg>\n</span>\n<span class=\"epa-gateway__title\">Analysis and reporting</span>\n<span aria-hidden=\"true\" class=\"epa-gateway__arrow\">\u2193</span>\n</span>\n</a>\n<a class=\"epa-gateway epa-gateway--improvement\" href=\"#program-improvement\">\n<span aria-hidden=\"true\" class=\"epa-gateway__frame\"></span>\n<span class=\"epa-gateway__content\">\n<span aria-hidden=\"true\" class=\"epa-gateway__mark\">\n<svg fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\">\n<path d=\"M5 17l4-4 3 3 7-8\"></path>\n<path d=\"M14 8h5v5\"></path>\n</svg>\n</span>\n<span class=\"epa-gateway__title\">Recommendations for program improvement</span>\n<span aria-hidden=\"true\" class=\"epa-gateway__arrow\">\u2193</span>\n</span>\n</a>\n</nav>\n</div>\n</section>\n<section aria-labelledby=\"cam-copy-title\" class=\"cam-copy\">\n<div class=\"epa-section-inner cam-copy__layout\">\n<div class=\"cam-copy__title-wrap\">\n<h2 class=\"cam-copy__title\" id=\"cam-copy-title\">\n            The Collaborative Assessment Model (CAM)\n          </h2>\n</div>\n<div class=\"cam-copy__body\">\n<p>\n            The Collaborative Assessment Model is an interdisciplinary, evidence-driven approach. It involves establishing shared goals, gathering data, analyzing the results, and considering what actionable measures can be taken to create a successful assessment.\n          </p>\n<p>\n            Strong communication with program leaders, which allows reflection and iteration based on the data, is a hallmark of this model. The Collaborative Assessment Model defines principles of strong data collection and relationship building within higher education settings.\n          </p>\n<p class=\"cam-copy__citation\">(Bathgate &amp; Claydon, 2021)</p>\n</div>\n</div>\n</section>\n<div id=\"cam-preview\">\n\n</div>\n</main>";

    (function () {
      const host = appRoot.querySelector("#cam-preview");
      if (!host) return;

      const principles = {
        aligned: {
          label: "Aligned",
          short:
            "Assessment activities reflect goals and outcomes of program activities",
          definition:
            "ALIGNED: This means that the assessment goals are well-articulated and all data collected tie back to these goals in specific ways without missing any key outcomes."
        },
        actionable: {
          label: "Actionable",
          short:
            "Data collection provides concrete next steps and long-term vision for the program",
          definition:
            "ACTIONABLE: This means that the data collected help explain the reasons behind why a program is functioning well or where it may need improvement."
        },
        sustainable: {
          label: "Sustainable",
          short:
            "Findings are translated into programmatic improvements and capacity for future assessment is included in planning",
          definition:
            "SUSTAINABLE: This means that the process of rerunning assessments, where needed, are planned for in advance to allow program leaders to carry on data collection."
        },
        contextual: {
          label: "Contextual",
          short:
            "Assessment approaches are accessible to and respectful of varied needs and values of the community",
          definition:
            "CONTEXT: This means considering the tone of a program, its relationship with participants, and the perspective of learners."
        }
      };

      host.innerHTML = `
        <section class="cam-interactive" aria-labelledby="cam-interactive-title">
          <h2 id="cam-interactive-title" class="cam-visually-hidden">
            Collaborative Assessment Principles
          </h2>

          <p class="cam-section-intro">
            Our work is guided by this model, which emphasizes assessments that are:
          </p>

          <div class="cam-inner">
            <div class="cam-visual-column">
              <div class="cam-flower" role="group" aria-label="Select a Collaborative Assessment principle">
                <button class="cam-petal cam-petal--aligned" type="button" data-principle="aligned" aria-pressed="false">
                  <span class="cam-petal-content">
                    <span class="cam-petal-title">${principles.aligned.label}</span>
                    <span class="cam-petal-copy">${principles.aligned.short}</span>
                  </span>
                </button>

                <button class="cam-petal cam-petal--actionable" type="button" data-principle="actionable" aria-pressed="false">
                  <span class="cam-petal-content">
                    <span class="cam-petal-title">${principles.actionable.label}</span>
                    <span class="cam-petal-copy">${principles.actionable.short}</span>
                  </span>
                </button>

                <button class="cam-petal cam-petal--sustainable" type="button" data-principle="sustainable" aria-pressed="false">
                  <span class="cam-petal-content">
                    <span class="cam-petal-title">${principles.sustainable.label}</span>
                    <span class="cam-petal-copy">${principles.sustainable.short}</span>
                  </span>
                </button>

                <button class="cam-petal cam-petal--contextual" type="button" data-principle="contextual" aria-pressed="false">
                  <span class="cam-petal-content">
                    <span class="cam-petal-title">${principles.contextual.label}</span>
                    <span class="cam-petal-copy">${principles.contextual.short}</span>
                  </span>
                </button>

                <button class="cam-center" type="button" data-action="reset" aria-label="Clear the selected principle">
                  <span>Collaborative<br>Assessment<br>Principles</span>
                </button>
              </div>
            </div>

            <div class="cam-detail-column" aria-live="polite">
              <div class="cam-details">
                ${Object.entries(principles)
                  .map(
                    ([id, item]) => `
                      <article class="cam-detail-item" data-detail="${id}" tabindex="0">
                        <p>${item.definition}</p>
                      </article>
                    `
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </section>
      `;

      const flower = host.querySelector(".cam-flower");
      const petalButtons = Array.from(host.querySelectorAll(".cam-petal"));
      const detailItems = Array.from(host.querySelectorAll(".cam-detail-item"));
      const resetButton = host.querySelector('[data-action="reset"]');

      let lockedId = null;

      function paint(id) {
        if (id) {
          flower.dataset.selected = id;
        } else {
          delete flower.dataset.selected;
        }

        petalButtons.forEach((button) => {
          const active = button.dataset.principle === id;
          button.classList.toggle("is-active", active);
          button.classList.toggle("is-selected", lockedId === button.dataset.principle);
          button.setAttribute(
            "aria-pressed",
            lockedId === button.dataset.principle ? "true" : "false"
          );
        });

        detailItems.forEach((item) => {
          item.classList.toggle("is-active", item.dataset.detail === id);
          item.classList.toggle("is-selected", item.dataset.detail === lockedId);
        });
      }

      function previewAllPrinciples() {
        delete flower.dataset.selected;

        petalButtons.forEach((button) => {
          button.classList.remove("is-active");
        });

        detailItems.forEach((item) => {
          item.classList.add("is-active");
        });
      }

      function previewPrinciple(id) {
        paint(id);
      }

      function restoreLockedState() {
        paint(lockedId);
      }

      function togglePrinciple(id) {
        lockedId = lockedId === id ? null : id;
        paint(lockedId);
      }

      function resetView() {
        lockedId = null;
        paint(null);
      }

      petalButtons.forEach((button) => {
        const id = button.dataset.principle;

        button.addEventListener("mouseenter", () => previewPrinciple(id));
        button.addEventListener("mouseleave", restoreLockedState);
        button.addEventListener("focus", () => previewPrinciple(id));
        button.addEventListener("blur", restoreLockedState);
        button.addEventListener("click", () => togglePrinciple(id));
      });

      detailItems.forEach((item) => {
        const id = item.dataset.detail;

        item.addEventListener("mouseenter", () => previewPrinciple(id));
        item.addEventListener("mouseleave", restoreLockedState);
        item.addEventListener("focus", () => previewPrinciple(id));
        item.addEventListener("blur", restoreLockedState);
      });

      resetButton.addEventListener("mouseenter", previewAllPrinciples);
      resetButton.addEventListener("mouseleave", restoreLockedState);
      resetButton.addEventListener("focus", previewAllPrinciples);
      resetButton.addEventListener("blur", restoreLockedState);
      resetButton.addEventListener("click", resetView);

      resetView();
    })();

    (function () {
          const tabsWrap = appRoot.querySelector(".epa-facet-tabs");
          const tabs = Array.from(appRoot.querySelectorAll(".epa-facet"));
          const detail = appRoot.querySelector(".epa-facet-detail");
          const label = appRoot.querySelector(".epa-facet-detail__label");
          const title = appRoot.querySelector(".epa-facet-detail__title");
          const text = appRoot.querySelector(".epa-facet-detail__text");

          const content = {
            collaboration: {
              color: "#11b9c8",
              label: "Strong collaborations",
              title: "Our assessment work is built on strong collaborations.",
              text: "Most projects begin with a consultation with us where you can share ideas and meet a member of our team. Strong communication with program leaders that allows reflection and iteration based on the data is a hallmark of this model."
            },
            methods: {
              color: "#5668f6",
              label: "Educational research design that emphasizes mixed methodologies",
              title: "Our assessment work is built on strong collaborations and educational research design that emphasizes mixed methodologies.",
              text: "Building variation in the modes of data collection offers a more holistic narrative of the function and impact of the program."
            },
            backgrounds: {
              color: "#b38b00",
              label: "Learning science, cognitive psychology, and neuroscience",
              title: "We use our team’s backgrounds in learning science, cognitive psychology, and neuroscience to inform this work.",
              text: ""
            },
            rigor: {
              color: "#0869cf",
              label: "Rigorous and Realistic Assessment",
              title: "We balance the rigor of established assessment approaches with the realistic expectation that data collection needs to be responsive to a program’s dynamic needs.",
              text: "We prioritize embedded and nimble methods that emphasize sustainability and avoid heavy lifts from participants, instructors, and program leaders."
            }
          };

          function showFacet(id) {
            const item = content[id];

            tabsWrap.dataset.active = id;
            detail.style.borderLeftColor = item.color;
            label.textContent = item.label;
            title.textContent = item.title;
            text.textContent = item.text;
            text.hidden = !item.text;

            tabs.forEach((tab) => {
              const active = tab.dataset.epaFacet === id;
              tab.classList.toggle("is-active", active);
              tab.setAttribute("aria-pressed", active ? "true" : "false");
            });
          }

          tabs.forEach((tab) => {
            const id = tab.dataset.epaFacet;
            tab.addEventListener("mouseenter", () => showFacet(id));
            tab.addEventListener("focus", () => showFacet(id));
            tab.addEventListener("click", () => showFacet(id));
          });

          showFacet("collaboration");
        })();

        (function () {
          const visual = appRoot.querySelector(".assessment-visual");
          const purpose = visual.querySelector(".assessment-purpose-core");
          const controls = Array.from(visual.querySelectorAll("[data-assessment-id]"));
          const phraseMap = {
            collecting: appRoot.querySelector(".assessment-phrase--collecting"),
            analyzing: appRoot.querySelector(".assessment-phrase--analyzing"),
            using: appRoot.querySelector(".assessment-phrase--using"),
            purpose: appRoot.querySelector(".assessment-phrase--purpose")
          };

          let locked = null;

          function clearPhrases() {
            Object.values(phraseMap).forEach((phrase) => {
              phrase.classList.remove("is-active");
            });
          }

          function show(id) {
            visual.dataset.active = id;
            clearPhrases();

            controls.forEach((control) => {
              const active = control.dataset.assessmentId === id;
              control.classList.toggle("is-active", active);
              control.setAttribute("aria-pressed", active && locked === id ? "true" : "false");
            });

            if (phraseMap[id]) {
              phraseMap[id].classList.add("is-active");
            }

            if (["collecting", "analyzing", "using"].includes(id) || id.startsWith("outcome-")) {
              purpose.classList.add("is-active");
              phraseMap.purpose.classList.add("is-active");
            }
          }

          function clear() {
            delete visual.dataset.active;
            clearPhrases();

            controls.forEach((control) => {
              control.classList.remove("is-active");
              control.setAttribute("aria-pressed", "false");
            });
          }

          function restore() {
            if (locked) {
              show(locked);
            } else {
              clear();
            }
          }

          controls.forEach((control) => {
            const id = control.dataset.assessmentId;

            control.addEventListener("mouseenter", () => show(id));
            control.addEventListener("mouseleave", restore);
            control.addEventListener("focus", () => show(id));
            control.addEventListener("blur", restore);
            control.addEventListener("click", () => {
              locked = locked === id ? null : id;
              restore();
            });
          });

          clear();
        })();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeApp, { once: true });
  } else {
    initializeApp();
  }
})();
