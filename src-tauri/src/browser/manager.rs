use crate::browser::state::BrowserState;

pub struct BrowserManager {
    pub state: BrowserState,
}

impl BrowserManager {
    pub fn new() -> Self {
        Self {
            state: BrowserState::default(),
        }
    }
}