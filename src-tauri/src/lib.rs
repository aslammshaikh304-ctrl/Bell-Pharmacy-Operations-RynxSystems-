mod browser;
mod commands;

use browser::{
    launch_browser,
    close_browser,
    browser_status,
};

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            if cfg!(debug_assertions) {
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Info)
                        .build(),
                )?;
            }
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
    launch_browser,
    close_browser,
    browser_status,
    commands::nomination::start_nomination_checker,
    commands::state::get_automation_state,
])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}