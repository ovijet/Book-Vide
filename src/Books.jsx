import React, { useContext } from "react";
import { Context } from "./BookContext/BookContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadList from "./Component/ListedBooks/ReadList";
import WisthList from "./Component/ListedBooks/WisthList";

const Books = () => {
  let { storeBook, wishList } = useContext(Context);
  console.log(storeBook, wishList, "cccccccc");
  return (
    <div className="mt-4">
      <Tabs>
        <TabList>
          <Tab>Rea List</Tab>
          <Tab>wish List</Tab>
        </TabList>

        <TabPanel>
          <ReadList></ReadList>
        </TabPanel>
        <TabPanel>
          <WisthList></WisthList>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
