import "./OpenSource.css";
export default function OpenSourceContribution() {
  return (
    <div style={{ backgroundColor: "#ffead0ff" }} className="h-100">
      <h1>Open Source Contributions</h1>
      <section style={{ height: "100vh" }}>
        <ul className="mb-0 p-3">
          <li className="contribution-list">
            Replace the blue square self-scheduler for anyone with 5 or more
            blue squares (anyone other than Owner/Admin){" "}
            <button>
              <a
                href="https://github.com/OneCommunityGlobal/HighestGoodNetworkApp/pull/1874"
                target="_blank"
                rel="noreferrer"
              >
                Open
              </a>
            </button>
          </li>
          <li className="contribution-list">
            Fix Task Name entry-box formatting{" "}
            <button>
              <a
                href="https://github.com/OneCommunityGlobal/HighestGoodNetworkApp/pull/1724"
                target="_blank"
                rel="noreferrer"
              >
                Open
              </a>
            </button>
          </li>
          <li className="contribution-list">
            Update Projects Page sorting (by Project Name) and Filters Project
            List by Category Name and Active/ Inactive{" "}
            <button>
              <a
                href="https://github.com/OneCommunityGlobal/HighestGoodNetworkApp/pull/1812"
                target="_blank"
                rel="noreferrer"
              >
                Open
              </a>
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
}
