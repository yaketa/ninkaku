export const calculateDelayDays = (startDate: string, period: number): number => {
  const start = new Date(startDate);
  const today = new Date();
  const expectedDate = new Date(start);
  expectedDate.setDate(start.getDate() + period);
  
  const diffTime = today.getTime() - expectedDate.getTime();
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
};

export const getDelayMessage = (delayDays: number): string => {
  if (delayDays < 0) {
    if (delayDays === -1) {
      return '月経予定日当日です。妊娠検査薬を使用する場合、薄い陽性反応が出る可能性があります。正確な結果を得るためには、数日後に再度検査することをお勧めします。';
    }
    return 'まだ月経予定日前です。妊娠検査薬を使用する場合、正確な結果が得られないことがあります。月経予定日以降に再度お試しください。';
  }
  if (delayDays <= 3) {
    return '月経がわずかに遅れています。もう少し様子を見てください。';
  }
  if (delayDays <= 7) {
    return '月経が約1週間遅れています。妊娠の可能性が考えられますので、検査薬を試してみてください。';
  }
  if (delayDays <= 14) {
    return '月経が2週間近く遅れています。妊娠の可能性が高いです。検査薬を試し、医師に相談してください。';
  }
  return '月経が2週間以上遅れています。妊娠の可能性が非常に高いため、医師に相談してください。';
};