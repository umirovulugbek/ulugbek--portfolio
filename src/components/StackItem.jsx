import  { useEffect, useState } from "react";
import { Container } from "./styleComponents.jsx/HomeStyle";
import Axios from "../utils/httpClient";
import { useDispatch } from "react-redux";

const StackItem = () => {
  const [stack, setStack] = useState([]);
  const [hoveredImgIndex, setHoveredImgIndex] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    getStack();
  }, []);

  const getStack = () => {
    setMainLoading(true);
    Axios()
      .get("/api/v1/technique")
      .then((res) => {
        setStack(res?.data?.data);
      })
      .finally(() => {
        setMainLoading(false);
      });
  };
  const setMainLoading = (l = false) => {
    dispatch({ type: "SET_LOADING", payload: l });
  };
  const handleMouseEnter = (index) => {
    setHoveredImgIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredImgIndex(null);
  };

  return (
    <div>
      <Container>
        {console.log(hoveredImgIndex, "ss")}
        <div className="section-stack">
          <div className="stack-img">
            {stack?.map((img, index) => (
              <img
                src={img?.tech_img}
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                alt={index}
                className={
                  hoveredImgIndex === null
                    ? "null"
                    : index !== hoveredImgIndex
                    ? "not-hovered"
                    : "hover"
                }
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StackItem;
