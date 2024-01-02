export interface ActivitiesState {
  data: SetActivitiesPayloadTypes[]
  loading: boolean
}

interface Athlete {
  id: number
  resource_state: number
}

interface ActivitieMap {
  id: string
  summary_polyline: string
  resource_state: number
}

export interface SetActivitiesPayloadTypes {
  achievement_count: number
  athlete: Athlete
  athlete_count: number
  average_speed: number
  comment_count: number
  commute: boolean
  display_hide_heartrate_option: boolean
  distance: number
  elapsed_time: number
  elev_high: number
  elev_low: number
  end_latlng: number[]
  external_id: string
  flagged: boolean
  from_accepted_tag: boolean
  gear_id: string | null
  has_heartrate: boolean
  has_kudoed: boolean
  heartrate_opt_out: boolean
  id: number
  kudos_count: number
  location_city: string | null
  location_country: string | null
  location_state: string | null
  manual: boolean
  map: ActivitieMap
  max_speed: number
  moving_time: number
  name: string
  photo_count: number
  pr_count: number
  private: boolean
  resource_state: number
  sport_type: string
  start_date: string
  start_date_local: string
  start_latlng: number[]
  timezone: string
  total_elevation_gain: number
  total_photo_count: number
  trainer: boolean
  type: string
  upload_id: number
  upload_id_str: string
  utc_offset: number
  visibility: string
  workout_type: number
}
