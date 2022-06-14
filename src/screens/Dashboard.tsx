import { useEffect, useState } from "react";
import { navigationRoutes } from "../navigationRoutes";
import { DashboardItem, DashboardType } from "../types/dashboard.types";
import { NoResults } from "../components/NoResults/NoResults";
import { getDashboards } from '../service/dashboard.service'
import { Grid, Box, Card, CardActions, CardContent, Button, Typography, CardHeader  } from '@mui/material';

export const DashboardScreen = () => {
  const [items, setItems] = useState<DashboardType[]>([]);


  const getLinkTo = (id: DashboardItem) => {
    switch (id) {
      case DashboardItem.DASHBOARD:
        return navigationRoutes.dashboard.path;
      case DashboardItem.SPORTS:
        return navigationRoutes.sports.path;
      case DashboardItem.COMPETITIONS:
      case DashboardItem.ORGANISATIONS:
      case DashboardItem.USERS:
      case DashboardItem.SCHEDULING:
        return navigationRoutes.dashboard.path;
    }
  };

  useEffect(() => {
    getDashboards().then((value) => {
      console.log(value)
      setItems(value)
    })
    // TODO: get data from dashboard.service
  }, []);

  if (!items || items.length === 0) {
    return <NoResults />;
  }

  return (
    <>
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {items.map(item => {
            return (
              <Grid id={item.id} item xs={6}>
                <Card>
                  {/* <CardHeader title="Shrimp and Chorizo Paella">
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                  </CardHeader> */}
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {item.text}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      More info
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )
            }
          )}
      </Grid>
    </Box>

    </>
  )
};
