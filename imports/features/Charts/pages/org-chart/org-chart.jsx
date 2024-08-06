import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

// material-ui
import { alpha, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// third-party
import { Tree, TreeNode } from 'react-organizational-chart';

// project imports
import Card from '../../../../features/Charts/pages/org-chart/Card';
import { data } from '../../../../data/org-chart';
import DataCard from '../../../../features/Charts/pages/org-chart/DataCard';
import MainCard from '../../../../ui/components/MainCard';

// ==============================|| ORGANIZATION CHARTS ||============================== //

function SimpleTree({ name }) {
  const theme = useTheme();

  return (
    <Typography
      sx={{
        p: 1.25,
        border: '1px solid',
        borderColor: 'primary.light',
        width: 'max-content',
        m: 'auto',
        color: 'primary.main',
        bgcolor: alpha(theme.palette.primary.lighter, 0.6),
        borderRadius: 1
      }}
    >
      {name}
    </Typography>
  );
}

function TreeCard({ items }) {
  return (
    <>
      {items.map((item, id) => (
        <Fragment key={id}>
          {item.children ? (
            <TreeNode label={<SimpleTree name={item.name} />}>
              <TreeCard items={item.children} />
            </TreeNode>
          ) : (
            <TreeNode label={<SimpleTree name={item.name} />} />
          )}
        </Fragment>
      ))}
    </>
  );
}

export default function OrgChartPage() {
  const theme = useTheme();

  return (
    <Grid container rowSpacing={2} justifyContent="center">
      <Grid item md={12} lg={12} xs={12}>
        <Grid container spacing={2}>
          <Grid item md={12} lg={12} xs={12}>
            <MainCard title="Simple Chart" contentSX={{ overflow: 'auto', direction: theme.direction }}>
              <Tree
                lineWidth="1px"
                lineColor={theme.palette.primary.main}
                lineBorderRadius="4px"
                label={<SimpleTree name={data[0].name} />}
              >
                <TreeCard items={data[0].children} />
              </Tree>
            </MainCard>
          </Grid>
          <Grid item md={12} lg={12} xs={12}>
            <MainCard title="Styled Chart" contentSX={{ overflow: 'auto', direction: theme.direction }}>
              <Tree
                lineWidth="1px"
                lineColor={theme.palette.primary.main}
                lineBorderRadius="4px"
                label={
                  <DataCard
                    name={data[0].name}
                    role={data[0].role}
                    avatar={data[0].avatar}
                    linkedin={data[0].linkedin}
                    facebook={data[0].facebook}
                    skype={data[0].skype}
                    root
                  />
                }
              >
                <Card items={data[0].children} />
              </Tree>
            </MainCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

SimpleTree.propTypes = { name: PropTypes.any };

TreeCard.propTypes = { items: PropTypes.any };
