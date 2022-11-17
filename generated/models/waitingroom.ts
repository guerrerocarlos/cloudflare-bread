/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { components_schemas_host } from './components_schemas_host';
import type { cookie_attributes } from './cookie_attributes';
import type { custom_page_html } from './custom_page_html';
import type { default_template_language } from './default_template_language';
import type { disable_session_renewal } from './disable_session_renewal';
import type { json_response_enabled } from './json_response_enabled';
import type { new_users_per_minute } from './new_users_per_minute';
import type { next_event_prequeue_start_time } from './next_event_prequeue_start_time';
import type { next_event_start_time } from './next_event_start_time';
import type { queue_all } from './queue_all';
import type { queueing_method } from './queueing_method';
import type { schemas_path } from './schemas_path';
import type { schemas_session_duration } from './schemas_session_duration';
import type { schemas_suspended } from './schemas_suspended';
import type { timestamp } from './timestamp';
import type { total_active_users } from './total_active_users';
import type { waiting_room_id } from './waiting_room_id';
import type { waitingroom_components_schemas_description } from './waitingroom_components_schemas_description';
import type { waitingroom_components_schemas_name } from './waitingroom_components_schemas_name';

export type waitingroom = {
    cookie_attributes?: cookie_attributes;
    created_on?: timestamp;
    custom_page_html?: custom_page_html;
    default_template_language?: default_template_language;
    description?: waitingroom_components_schemas_description;
    disable_session_renewal?: disable_session_renewal;
    host?: components_schemas_host;
    id?: waiting_room_id;
    json_response_enabled?: json_response_enabled;
    modified_on?: timestamp;
    name?: waitingroom_components_schemas_name;
    new_users_per_minute?: new_users_per_minute;
    next_event_prequeue_start_time?: next_event_prequeue_start_time;
    next_event_start_time?: next_event_start_time;
    path?: schemas_path;
    queue_all?: queue_all;
    queueing_method?: queueing_method;
    session_duration?: schemas_session_duration;
    suspended?: schemas_suspended;
    total_active_users?: total_active_users;
};

