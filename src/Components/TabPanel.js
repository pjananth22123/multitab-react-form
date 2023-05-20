import React from "react";


function TabPanel(props) {
    const { children, value, index, setIndex, PageDisplay,...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <div className="form">
            <div className="form-container">
              <div className="body">{PageDisplay()}</div>
              <div className="footer">
                  <button disabled={index === 0} onClick={() => {setIndex(index-1)}}>
                    Prev
                  </button>
                  <button onClick={() => {
                    if(index !== 3) {
                      setIndex(index+1);
                      }
                      }
                  }>
                    {index === 3 ? "Submit" : "Next"}
                  </button>
              </div>
            </div>
          </div>)}
      </div>
    );
  }

  export default TabPanel;
