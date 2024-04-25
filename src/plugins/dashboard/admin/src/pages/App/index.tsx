"use client";
/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */
import React, { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { AnErrorOccurred } from "@strapi/helper-plugin";
import pluginId from "../../pluginId";
import HomePage from "../HomePage";

const App = () => {
  const { push } = useHistory();
  const navigate = (e: any, url: string) => {
    e.preventDefault();
    push(url);
  };
  useEffect(() => {
    // Select the element with the class ".sc-ekRyGy"
    var navLink = document.querySelector(".sc-ekRyGy");

    if (navLink) {
      // Create a new anchor element
      var newAnchor = document.createElement("a");

      // Set attributes for the new anchor element
      newAnchor.setAttribute("href", "#");
      newAnchor.setAttribute("aria-current", "page"); // Add aria-current attribute

      newAnchor.classList.add("sc-ekRyGy");
      newAnchor.classList.add("jrJbfB");
      newAnchor.classList.add("active");

      // Create the inner HTML for the new anchor element
      newAnchor.innerHTML = `
        <div class="sc-bdvvtL eMEmwh">
          <div class="sc-bdvvtL sc-gsDKAQ bOQZK WlUdp">
            <div aria-hidden="true" tabindex="-1" class="sc-kQoPux iBWDdc">
              <img src="http://localhost:1337/uploads/cosmos_3e710dd725.svg" alt="Application logo">
            </div>
            <div class="sc-bdvvtL bqRyns">
              <span class="sc-dkPtRN bldYXz">Dashboard<span class="sc-iCfMLu gejpLQ">Workplace</span></span>
              <p aria-hidden="true" class="sc-dkPtRN ivkCIt">Workplace</p>
            </div>
          </div>
        </div>
      `;

      // Add styles as an object
      var styles = {
        margin: "0px",
        padding: "0px",
        border: "0px",
        font: "inherit",
        verticalAlign: "baseline",
        textDecoration: "none",
      };

      // Apply styles to the new anchor element
      Object.assign(newAnchor.style, styles);

      // Add onClick function to the new anchor element
      newAnchor.onclick = function (e) {
        navigate(e, "/plugins/dashboard");
      };

      // Replace the original anchor with the new one
      navLink.parentNode?.replaceChild(newAnchor, navLink);
    }
  }, []); // Empty dependency array to run the effect only once after the component mounts

  return (
    <div>
      <Switch>
        <Route path={`/plugins/${pluginId}`} component={HomePage} exact />
        <Route component={AnErrorOccurred} />
      </Switch>
    </div>
  );
};

export default App;
