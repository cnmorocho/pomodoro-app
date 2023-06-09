import DesktopWrapper from '@/components/DesktopWrapper';
import Navbar from '@/components/Navbar';
import TimerSection from '@/components/TimerSection.tsx';

export default function Home() {
    return (
        <DesktopWrapper title='Tomacco'>
            <Navbar />
            <TimerSection />
        </DesktopWrapper>
    );
}
