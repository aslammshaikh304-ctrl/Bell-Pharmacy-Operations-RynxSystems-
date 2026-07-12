use tauri::command;

#[command]
pub fn launch_browser() -> String {
    println!("Launching Browser");
    "Browser Started".to_string()
}

#[command]
pub fn close_browser() -> String {
    println!("Closing Browser");
    "Browser Closed".to_string()
}

#[command]
pub fn browser_status() -> String {
    "Idle".to_string()
}