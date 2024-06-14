import "./OpenSource.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
export default function OpenSourceContribution() {
  let contributions = [
    {
      description:
        "Replace the blue square self-scheduler for anyone with 5 or more blue squares anyone other than Owner/Admin",
      link: "https://github.com/OneCommunityGlobal/HighestGoodNetworkApp/pull/1874",
    },
    {
      description:
        "Adds user's ability to check entered password to reveal the weeklySummaryRecipient for Authorized users only",
      link: "https://github.com/OneCommunityGlobal/HighestGoodNetworkApp/pull/2124",
    },
    {
      description: "Fix Task Name entry-box formatting",
      link: "https://github.com/OneCommunityGlobal/HighestGoodNetworkApp/pull/1724",
    },
    {
      description: "Show new icon on ai prompt update",
      link: "https://github.com/OneCommunityGlobal/HighestGoodNetworkApp/pull/1899",
    },
    {
      description:
        "Update Projects Page sorting (by Project Name) and Filters Project List by Category Name and Active/ Inactive",
      link: "https://github.com/OneCommunityGlobal/HighestGoodNetworkApp/pull/1812",
    },
  ];
  const renderList = contributions.map((task, index) => {
    if (!task.description) {
      return;
    }
    return (
      <li key={index} className="m-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-text">{task.description}</h5>
            <a
              href={task.link}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Check Pull Request
            </a>
          </div>
        </div>
      </li>
    );
  });
  return (
    <div
      style={{ backgroundColor: "#ffead0ff" }}
      className="h-100"
      id="open-source"
    >
      <h1 className="p-2">Open Source Contributions</h1>
      <div>
        <h4>One Community Global </h4>
        <p className="">
          A global change organization creating open source blueprints, tools,
          and tutorials for all aspects of sustainable living and creating
        </p>
        <p className="d-flex justify-content-evenly">
          <a
            href="https://github.com/OneCommunityGlobal"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: " #113537ff", fontSize: "1.3em" }}
              className="link"
            />
          </a>
          <a
            href="https://www.onecommunityglobal.org/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGlobe}
              style={{ color: "#113537ff", fontSize: "1.3em" }}
              className="link"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/one-community-global/mycompany/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              style={{ color: "#113537ff", fontSize: "1.3em" }}
              className="link"
            />
          </a>
        </p>
      </div>
      <section style={{ height: "100vh" }}>
        <ul className="mb-0 p-3">{renderList}</ul>
      </section>
    </div>
  );
}
