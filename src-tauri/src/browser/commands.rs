use tauri::command;

#[command]
pub fn launch_browser() -> String {
    "Browser launched".to_string()
}

#[command]
pub fn close_browser() -> String {
    "Browser closed".to_string()
}

#[command]
pub fn browser_status() -> String {
    "Disconnected".to_string()
}