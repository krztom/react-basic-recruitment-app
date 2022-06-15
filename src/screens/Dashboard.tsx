import { useEffect, useState } from "react";
import { navigationRoutes } from "../navigationRoutes";
import { DashboardItem, DashboardType } from "../types/dashboard.types";
import { NoResults } from "../components/NoResults/NoResults";
import { getDashboards } from '../service/dashboard.service'
import { Grid, Box, Card, CardActions, CardContent, Button, Typography, CardHeader, Link  } from '@mui/material';
import { padding } from "@mui/system";

export const DashboardScreen = () => {
  const [items, setItems] = useState<DashboardType[]>([]);


  const getLinkTo = (id: DashboardItem) => {
    switch (id) {
      case DashboardItem.DASHBOARD:
        return navigationRoutes.dashboard.path;
      case DashboardItem.SPORTS:
        return navigationRoutes.sports.path;
      case DashboardItem.COMPETITIONS:
        return navigationRoutes.competitions.path;
      case DashboardItem.ORGANISATIONS:
        return navigationRoutes.organisations.path;
      case DashboardItem.USERS:
        return navigationRoutes.users.path;
      case DashboardItem.SCHEDULING:
        return navigationRoutes.dashboard.path;
      default: return navigationRoutes.dashboard.path;
    }
  };

  useEffect(() => {
    getDashboards().then((value) => {
      setItems(value)
    })
    // TODO: get data from dashboard.service
  }, []);

  if (!items || items.length === 0) {
    return <NoResults />;
  }



  return (
    <>
    {/* <Box sx={{ width: '100%' }}> */}
      <Grid container rowSpacing={6} columnSpacing={3}>
          {items.map(item => {
            type DashboardItemValue = `${DashboardItem}`;
            const LinkToScreen = (value: DashboardItemValue) => getLinkTo(value as DashboardItem);

            return (
              <Grid key={item.id} id={item.id} item xs={6}>
                <Card
                   sx={{ height: 'auto'}}
                >
                  <CardHeader
                    title={item.title}
                    titleTypographyProps={{variant:'body1' }}
                    sx={{ background: 'black', color: 'white', padding: '1rem 2rem' }}
                  />
                  <CardContent  sx={{ padding: '1rem 2rem' }}>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {item.text}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{ justifyContent: 'flex-end', padding: '1rem 2rem' }}
                    >
                      <Link href={LinkToScreen(item.id)} underline={'none'}>
                        <Button size="small" color="primary">
                          More info
                        </Button>
                      </Link>
                  </CardActions>
                </Card>
              </Grid>
            )
            }
          )}
      </Grid>
    {/* </Box> */}

    </>
  )
};
