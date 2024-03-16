import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
  HiInbox,
} from "react-icons/hi";
import { BiBuoy } from "react-icons/bi";


const SideBar = () => {
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo href="#" img="profile.jpg" imgAlt="Profile">
        <p>{name}</p>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            <p>Dashboard</p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/admin/dashboard/upload"
            icon={HiOutlineCloudUpload}
          >
            <p>Upload</p>
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            <p>Manage Books</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            <p>Users</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            <p>Products</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            <p>Sign In</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            <p>Log Out</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            <p>Upgrade to Pro</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            <p>Documentation</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            <p>Help</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
