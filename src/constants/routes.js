export const routeDefinitions = {
    INDEX: '', //to make this the entry point
    AUTH: 'auth',
    LOGIN: 'login',
    LMS: "lms",
    FORGOT_PASSWORD: 'forgot-password',
    RESET_PASSWORD: 'reset-password/:token',
    PROGRAMS: 'programs',
    PROGRAM: 'program',
    Batch: ':batch',
    Assignments: ':batch/assignments',
    Attendance: ':batch/attendance',
    Schedule: 'schedule',
    Meeting: 'meeting/:id',
    MeetingEnded: 'meeting/ended',
    Practice: 'practice',
    Me: 'me',
    Tree: 'tree',
    File: 'file',
    SessionLimit: '/auth/session-limit',
    MESSAGE: 'message',
    Download: 'download/:certId',
    MagicLink: 'magic-login',
    VerifyMaginLink: 'verify-magic-link/:token',

    Video: 'video',
    Courses: 'courses',
    Discussion: 'discussion',
    Settings: 'settings',
    Certificate: 'certificate',
    Profile: 'profile',
}