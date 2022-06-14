import { useEffect, useState } from "react";
import { SportsType, SportType } from "../types/sports.types";
import { NoResults } from "../components/NoResults/NoResults";
import { Table, TableColumn } from "../components/Table/Table";
import { Visibility } from "@mui/icons-material";
import { Box, Toolbar } from "@mui/material";
import { getSports, getSportById } from '../service/sports.service'

export const SportsScreen = () => {
  const [sports, setSports] = useState<SportsType | undefined>(undefined);
  const [sportDetails, setSportDetails] = useState<SportType | undefined>(undefined);

  const columns: TableColumn<SportType>[] = [
    { id: "sport", label: "Sport", value: "name" },
    { id: "location", label: "Location", value: "location" },
    { id: "name", label: "Name", value: "shortDescription" },
    {
      id: "actions",
      label: "Actions",
      value: <Visibility />,
      textAlign: "right",
    },
  ];

  const getSportDetails = (id: SportType['id']) => {

     // expected output: "Success!"
  }

  useEffect(() => {

    console.log(sportDetails)

    getSportById(1).then((value) => {
      console.log(value)
      setSportDetails(value)
    })
    getSports().then((value) => {
      console.log(value)
      setSports(value)
    })
    // TODO: get data from sports.service

  }, []);

  console.log(sportDetails)
  console.log(sports)
  console.log(columns)

  if (!sports) {
    return <NoResults />;
  }

  // TODO: display data got form service
  return (
    <>
      <Table
        columns={columns}
        items={sports.items}
        title={sports.teaser}
      />

    </>
  )
};
