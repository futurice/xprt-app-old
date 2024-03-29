import {NavigationExperimental} from 'react-native';

const {StateUtils: NavigationStateUtils} = NavigationExperimental;

// Actions
const PUSH_ROUTE = 'NavigationState/PUSH_ROUTE';
const POP_ROUTE = 'NavigationState/POP_ROUTE';
const SWITCH_TAB = 'NavigationState/SWITCH_TAB';

export function switchTab(index) {
  return {
    type: SWITCH_TAB,
    payload: index
  };
}

// Action creators
export function pushRoute(route) {
  console.log(route);
  return {
    type: PUSH_ROUTE,
    payload: route
  };
}

export function popRoute() {
  return {type: POP_ROUTE};
}

// reducers for tabs and scenes are separate
const initialState = {
  tabs: {
    index: 0,
    routes: [
      {key: 'ExpertsTab', title: 'Experts'},
      {key: 'ProfileTab', title: 'Profile'},
      {key: 'WelcomeTab', title: 'Lectures'}
    ]
  },
  ExpertsTab: {
    index: 0,
    routes: [{
      key: 'ExpertsList',
      title: 'Experts List'
    }]
  },
  // Scenes for the `ProfileTab` tab.
  ProfileTab: {
    index: 0,
    routes: [{
      key: 'Color',
      title: 'Color Screen'
    }]
  },
  WelcomeTab: {
    index: 0,
    routes: [{
      key: 'Welcome',
      title: 'Welcome Screen'
    }]
  }
};

export default function NavigationReducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_ROUTE: {
      // Push a route into the scenes stack.
      const route = action.payload;
      const tabs = state.tabs;
      const tabKey = tabs.routes[tabs.index].key;
      const scenes = state[tabKey];
      let nextScenes;
      // fixes issue #52
      // the try/catch block prevents throwing an error when the route's key pushed
      // was already present. This happens when the same route is pushed more than once.
      try {
        nextScenes = NavigationStateUtils.push(scenes, route);
      } catch (e) {
        nextScenes = scenes;
      }
      if (scenes !== nextScenes) {
        return {
          ...state,
          [tabKey]: nextScenes
        };
      }
      return state;
    }

    case POP_ROUTE: {
      // Pops a route from the scenes stack.
      const tabs = state.tabs;
      const tabKey = tabs.routes[tabs.index].key;
      const scenes = state[tabKey];
      const nextScenes = NavigationStateUtils.pop(scenes);
      if (scenes !== nextScenes) {
        return {
          ...state,
          [tabKey]: nextScenes
        };
      }
      return state;
    }

    case SWITCH_TAB: {
      // Switches the tab.
      const tabs = NavigationStateUtils.jumpToIndex(state.tabs, action.payload);
      if (tabs !== state.tabs) {
        return {
          ...state,
          tabs
        };
      }
      return state;
    }

    default:
      return state;
  }
}
