import { useToast } from '@/components/use-toast';
import { AddressOrENS } from '@iexec/dataprotector';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getDataProtectorClient } from '../externals/dataProtectorClient';
export function rlcToNrlc(rlcValue: number) {
  return rlcValue * 10 ** 9;
}

import { useRouter } from 'next/navigation';
export function useSetForSaleMutation({
  protectedDataAddress,
}: {
  protectedDataAddress: AddressOrENS;
}) {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const router = useRouter();

  const setForSaleMutation = useMutation({
    mutationKey: ['setProtectedDataForSale'],
    mutationFn: async ({ priceInRLC }: { priceInRLC: number }) => {
      const { dataProtectorSharing } = await getDataProtectorClient();
      return dataProtectorSharing.setProtectedDataForSale({
        protectedData: protectedDataAddress,
        price: rlcToNrlc(priceInRLC),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['protectedData', protectedDataAddress],
      });

      toast({
        variant: 'success',
        title: 'Monetization set successfully.',
      });
      router.push(`/my-contents/${protectedDataAddress}/recap`);
    },
  });

  return {
    setForSaleMutation,
  };
}
