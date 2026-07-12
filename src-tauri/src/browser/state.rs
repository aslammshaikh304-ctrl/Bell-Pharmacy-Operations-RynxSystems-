#[derive(Default)]
pub struct BrowserState {
    pub connected: bool,
    pub launched: bool,
    pub current_url: String,
}