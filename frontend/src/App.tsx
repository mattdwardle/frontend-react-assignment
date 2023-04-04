import React from 'react';
import './App.css';
import { createStyles, MantineProvider } from '@mantine/core';
import { colors } from './app/constants/colors';
import { Provider } from 'react-redux';
import { store } from './app/store/store';

const useStyles = createStyles((theme) => ({
    bodyBackground: {
        backgroundColor: colors.lightBackground,
        minHeight: '100vh',
    },
}));

function App() {
    const { classes } = useStyles();

    return (
        <Provider store={store}>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme: 'light',
                }}
            >
                <div className={classes.bodyBackground}>
                    <div>What is already built:</div>
                    <div>
                        <ul>
                            <li>UI - We already made all the UI components for you</li>
                            <li>Basic folder structure</li>
                            <li>Initialized redux store</li>
                        </ul>
                    </div>
                    <div>Missing pieces in this application:</div>
                    <div>
                        <ul>
                            <li>Routing</li>
                            <li>Api calls to populate the application</li>
                            <li>Implementing the Redux store to save the data</li>
                        </ul>
                    </div>
                </div>
            </MantineProvider>
        </Provider>
    );
}

export default App;
