export interface ProcessState {
    currentStep: number;
    testCount: number;
    checkAll: boolean;
    failed: boolean;
    hints: boolean;

    save(): void;

    isStep(n: number): boolean;
}