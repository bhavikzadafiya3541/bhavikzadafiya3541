<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class NonInvoicePaymentListResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $tranasaction = $this->paymentTransaction;

        return [
            'id' => $this->id,
            'slug' => $this->slug,
            'clientName' => $this->client->name,
            'account' => $tranasaction ? new AccountResource($tranasaction->cashbookAccount) : '',
            'transaction' => $this->paymentTransaction,
            'amount' => $this->amount,
            'type' => (int) $this->type,
            'date' => $this->date,
            'note' => $this->note,
            'status' => (int) $this->status,
        ];
    }
}
