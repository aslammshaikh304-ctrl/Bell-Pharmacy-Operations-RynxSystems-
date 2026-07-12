use std::fs;
use std::path::PathBuf;

use tauri::command;

#[command]
pub fn get_automation_state() -> Result<String, String> {
    let state_file = PathBuf::from(env!("CARGO_MANIFEST_DIR"))
        .parent()
        .unwrap() // apps/desktop
        .parent()
        .unwrap() // apps
        .parent()
        .unwrap() // BellPharmacyOperations
        .join("automation")
        .join("runtime")
        .join("automation_state.json");

    if !state_file.exists() {
        return Ok("{}".to_string());
    }

    fs::read_to_string(state_file).map_err(|e| e.to_string())
}