import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 300,
        margin: "auto"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
};

const card = (props) => {
    const { classes } = props;
    return (
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        Movie {props.index}
                    </Typography>
                    <Typography component="p">
                        this will be a movie summary description
                    </Typography>
                </CardContent>
            </Card>
    );
}

export default withStyles(styles)(card);