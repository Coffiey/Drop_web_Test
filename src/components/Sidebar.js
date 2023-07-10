import Data from "../data.json";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const { searchData, userData, itemData } = Data;

  return (
    <div className='sidebar'>
      <ListGroup
        defaultActiveKey='#link1'
        style={{ marginTop: "20px" }}
      >
        {userData.map((user) => {
          return (
            <ListGroup.Item
              action
              onClick={() => navigate("/sale")}
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  marginLeft: "20px",
                  marginRight: "auto",
                  width: "fit-content",
                }}
              >
                <Image
                  style={{ borderRadius: "50%", height: "2em" }}
                  src={user.userName + ".jpg"}
                />
                <span style={{ paddingLeft: "15px" }}>{user.userName}</span>
              </div>

              <div style={{ width: "20px" }}>
                <span style={{ fontSize: "0.7em" }}>
                  {user.live ? "🟢" : "🔴"}
                </span>
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default Sidebar;
