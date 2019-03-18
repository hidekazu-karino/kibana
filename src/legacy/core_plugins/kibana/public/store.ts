/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { QueryLanguageType, ViewMode } from 'ui/embeddable/types';
import { DashboardState } from './dashboard/selectors';
import { reducers } from './reducers';

const enhancers = [applyMiddleware(thunk)];

export function CreateStore(state: { dashboard: DashboardState }) {
  return createStore(reducers, state, compose(...enhancers));
}

export const store = CreateStore({
  dashboard: {
    embeddables: {},
    metadata: {
      title: 'New Dashboard',
    },
    panels: {},
    view: {
      filters: [],
      hidePanelTitles: false,
      isFullScreenMode: false,
      query: { language: QueryLanguageType.LUCENE, query: '' },
      timeRange: { from: 'now-15m', to: 'now' },
      useMargins: true,
      viewMode: ViewMode.VIEW,
      refreshConfig: { isPaused: false, interval: 0 },
    },
  },
});
