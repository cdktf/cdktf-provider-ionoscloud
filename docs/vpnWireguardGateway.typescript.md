# `vpnWireguardGateway` Submodule <a name="`vpnWireguardGateway` Submodule" id="@cdktf/provider-ionoscloud.vpnWireguardGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnWireguardGateway <a name="VpnWireguardGateway" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway ionoscloud_vpn_wireguard_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer"></a>

```typescript
import { vpnWireguardGateway } from '@cdktf/provider-ionoscloud'

new vpnWireguardGateway.VpnWireguardGateway(scope: Construct, id: string, config: VpnWireguardGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig">VpnWireguardGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig">VpnWireguardGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putConnections">putConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetInterfaceIpv4Cidr">resetInterfaceIpv4Cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetInterfaceIpv6Cidr">resetInterfaceIpv6Cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetListenPort">resetListenPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetTier">resetTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnections` <a name="putConnections" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putConnections"></a>

```typescript
public putConnections(value: IResolvable | VpnWireguardGatewayConnections[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putConnections.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a>[]

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putMaintenanceWindow"></a>

```typescript
public putMaintenanceWindow(value: VpnWireguardGatewayMaintenanceWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow">VpnWireguardGatewayMaintenanceWindow</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putTimeouts"></a>

```typescript
public putTimeouts(value: VpnWireguardGatewayTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts">VpnWireguardGatewayTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInterfaceIpv4Cidr` <a name="resetInterfaceIpv4Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetInterfaceIpv4Cidr"></a>

```typescript
public resetInterfaceIpv4Cidr(): void
```

##### `resetInterfaceIpv6Cidr` <a name="resetInterfaceIpv6Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetInterfaceIpv6Cidr"></a>

```typescript
public resetInterfaceIpv6Cidr(): void
```

##### `resetListenPort` <a name="resetListenPort" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetListenPort"></a>

```typescript
public resetListenPort(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetMaintenanceWindow"></a>

```typescript
public resetMaintenanceWindow(): void
```

##### `resetTier` <a name="resetTier" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetTier"></a>

```typescript
public resetTier(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpnWireguardGateway resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isConstruct"></a>

```typescript
import { vpnWireguardGateway } from '@cdktf/provider-ionoscloud'

vpnWireguardGateway.VpnWireguardGateway.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isTerraformElement"></a>

```typescript
import { vpnWireguardGateway } from '@cdktf/provider-ionoscloud'

vpnWireguardGateway.VpnWireguardGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isTerraformResource"></a>

```typescript
import { vpnWireguardGateway } from '@cdktf/provider-ionoscloud'

vpnWireguardGateway.VpnWireguardGateway.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.generateConfigForImport"></a>

```typescript
import { vpnWireguardGateway } from '@cdktf/provider-ionoscloud'

vpnWireguardGateway.VpnWireguardGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VpnWireguardGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpnWireguardGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpnWireguardGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpnWireguardGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList">VpnWireguardGatewayConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference">VpnWireguardGatewayMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference">VpnWireguardGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.connectionsInput">connectionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.gatewayIpInput">gatewayIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv4CidrInput">interfaceIpv4CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv6CidrInput">interfaceIpv6CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.listenPortInput">listenPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow">VpnWireguardGatewayMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.tierInput">tierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts">VpnWireguardGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.gatewayIp">gatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv4Cidr">interfaceIpv4Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv6Cidr">interfaceIpv6Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.listenPort">listenPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.tier">tier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.connections"></a>

```typescript
public readonly connections: VpnWireguardGatewayConnectionsList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList">VpnWireguardGatewayConnectionsList</a>

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: VpnWireguardGatewayMaintenanceWindowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference">VpnWireguardGatewayMaintenanceWindowOutputReference</a>

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.timeouts"></a>

```typescript
public readonly timeouts: VpnWireguardGatewayTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference">VpnWireguardGatewayTimeoutsOutputReference</a>

---

##### `connectionsInput`<sup>Optional</sup> <a name="connectionsInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.connectionsInput"></a>

```typescript
public readonly connectionsInput: IResolvable | VpnWireguardGatewayConnections[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `gatewayIpInput`<sup>Optional</sup> <a name="gatewayIpInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.gatewayIpInput"></a>

```typescript
public readonly gatewayIpInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `interfaceIpv4CidrInput`<sup>Optional</sup> <a name="interfaceIpv4CidrInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv4CidrInput"></a>

```typescript
public readonly interfaceIpv4CidrInput: string;
```

- *Type:* string

---

##### `interfaceIpv6CidrInput`<sup>Optional</sup> <a name="interfaceIpv6CidrInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv6CidrInput"></a>

```typescript
public readonly interfaceIpv6CidrInput: string;
```

- *Type:* string

---

##### `listenPortInput`<sup>Optional</sup> <a name="listenPortInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.listenPortInput"></a>

```typescript
public readonly listenPortInput: number;
```

- *Type:* number

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.maintenanceWindowInput"></a>

```typescript
public readonly maintenanceWindowInput: VpnWireguardGatewayMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow">VpnWireguardGatewayMaintenanceWindow</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.tierInput"></a>

```typescript
public readonly tierInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VpnWireguardGatewayTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts">VpnWireguardGatewayTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `gatewayIp`<sup>Required</sup> <a name="gatewayIp" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.gatewayIp"></a>

```typescript
public readonly gatewayIp: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interfaceIpv4Cidr`<sup>Required</sup> <a name="interfaceIpv4Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv4Cidr"></a>

```typescript
public readonly interfaceIpv4Cidr: string;
```

- *Type:* string

---

##### `interfaceIpv6Cidr`<sup>Required</sup> <a name="interfaceIpv6Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.interfaceIpv6Cidr"></a>

```typescript
public readonly interfaceIpv6Cidr: string;
```

- *Type:* string

---

##### `listenPort`<sup>Required</sup> <a name="listenPort" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.listenPort"></a>

```typescript
public readonly listenPort: number;
```

- *Type:* number

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpnWireguardGatewayConfig <a name="VpnWireguardGatewayConfig" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.Initializer"></a>

```typescript
import { vpnWireguardGateway } from '@cdktf/provider-ionoscloud'

const vpnWireguardGatewayConfig: vpnWireguardGateway.VpnWireguardGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.connections">connections</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a>[]</code> | connections block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.gatewayIp">gatewayIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#gateway_ip VpnWireguardGateway#gateway_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#name VpnWireguardGateway#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.privateKey">privateKey</a></code> | <code>string</code> | PrivateKey used for WireGuard Server. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#description VpnWireguardGateway#description}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#id VpnWireguardGateway#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.interfaceIpv4Cidr">interfaceIpv4Cidr</a></code> | <code>string</code> | The IPV4 address (with CIDR mask) to be assigned to the WireGuard interface. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.interfaceIpv6Cidr">interfaceIpv6Cidr</a></code> | <code>string</code> | The IPV6 address (with CIDR mask) to be assigned to the WireGuard interface. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.listenPort">listenPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#listen_port VpnWireguardGateway#listen_port}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.location">location</a></code> | <code>string</code> | The location of the WireGuard Gateway. Supported locations: de/fra, de/txl, es/vit, gb/bhx, gb/lhr, us/ewr, us/las, us/mci, fr/par. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow">VpnWireguardGatewayMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.tier">tier</a></code> | <code>string</code> | Gateway performance options. See the documentation for the available options. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts">VpnWireguardGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.connections"></a>

```typescript
public readonly connections: IResolvable | VpnWireguardGatewayConnections[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a>[]

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#connections VpnWireguardGateway#connections}

---

##### `gatewayIp`<sup>Required</sup> <a name="gatewayIp" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.gatewayIp"></a>

```typescript
public readonly gatewayIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#gateway_ip VpnWireguardGateway#gateway_ip}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#name VpnWireguardGateway#name}.

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

PrivateKey used for WireGuard Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#private_key VpnWireguardGateway#private_key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#description VpnWireguardGateway#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#id VpnWireguardGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interfaceIpv4Cidr`<sup>Optional</sup> <a name="interfaceIpv4Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.interfaceIpv4Cidr"></a>

```typescript
public readonly interfaceIpv4Cidr: string;
```

- *Type:* string

The IPV4 address (with CIDR mask) to be assigned to the WireGuard interface.

__Note__: either interfaceIPv4CIDR or interfaceIPv6CIDR is __required__.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#interface_ipv4_cidr VpnWireguardGateway#interface_ipv4_cidr}

---

##### `interfaceIpv6Cidr`<sup>Optional</sup> <a name="interfaceIpv6Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.interfaceIpv6Cidr"></a>

```typescript
public readonly interfaceIpv6Cidr: string;
```

- *Type:* string

The IPV6 address (with CIDR mask) to be assigned to the WireGuard interface.

__Note__: either interfaceIPv6CIDR or interfaceIPv4CIDR is __required__.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#interface_ipv6_cidr VpnWireguardGateway#interface_ipv6_cidr}

---

##### `listenPort`<sup>Optional</sup> <a name="listenPort" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.listenPort"></a>

```typescript
public readonly listenPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#listen_port VpnWireguardGateway#listen_port}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the WireGuard Gateway. Supported locations: de/fra, de/txl, es/vit, gb/bhx, gb/lhr, us/ewr, us/las, us/mci, fr/par.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#location VpnWireguardGateway#location}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: VpnWireguardGatewayMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow">VpnWireguardGatewayMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#maintenance_window VpnWireguardGateway#maintenance_window}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

Gateway performance options. See the documentation for the available options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#tier VpnWireguardGateway#tier}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VpnWireguardGatewayTimeouts;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts">VpnWireguardGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#timeouts VpnWireguardGateway#timeouts}

---

### VpnWireguardGatewayConnections <a name="VpnWireguardGatewayConnections" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.Initializer"></a>

```typescript
import { vpnWireguardGateway } from '@cdktf/provider-ionoscloud'

const vpnWireguardGatewayConnections: vpnWireguardGateway.VpnWireguardGatewayConnections = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.datacenterId">datacenterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#datacenter_id VpnWireguardGateway#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.lanId">lanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#lan_id VpnWireguardGateway#lan_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.ipv4Cidr">ipv4Cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#ipv4_cidr VpnWireguardGateway#ipv4_cidr}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.ipv6Cidr">ipv6Cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#ipv6_cidr VpnWireguardGateway#ipv6_cidr}. |

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#datacenter_id VpnWireguardGateway#datacenter_id}.

---

##### `lanId`<sup>Required</sup> <a name="lanId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.lanId"></a>

```typescript
public readonly lanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#lan_id VpnWireguardGateway#lan_id}.

---

##### `ipv4Cidr`<sup>Optional</sup> <a name="ipv4Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.ipv4Cidr"></a>

```typescript
public readonly ipv4Cidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#ipv4_cidr VpnWireguardGateway#ipv4_cidr}.

---

##### `ipv6Cidr`<sup>Optional</sup> <a name="ipv6Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections.property.ipv6Cidr"></a>

```typescript
public readonly ipv6Cidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#ipv6_cidr VpnWireguardGateway#ipv6_cidr}.

---

### VpnWireguardGatewayMaintenanceWindow <a name="VpnWireguardGatewayMaintenanceWindow" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow.Initializer"></a>

```typescript
import { vpnWireguardGateway } from '@cdktf/provider-ionoscloud'

const vpnWireguardGatewayMaintenanceWindow: vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow.property.dayOfTheWeek">dayOfTheWeek</a></code> | <code>string</code> | The name of the week day. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow.property.time">time</a></code> | <code>string</code> | Start of the maintenance window in UTC time. |

---

##### `dayOfTheWeek`<sup>Required</sup> <a name="dayOfTheWeek" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow.property.dayOfTheWeek"></a>

```typescript
public readonly dayOfTheWeek: string;
```

- *Type:* string

The name of the week day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#day_of_the_week VpnWireguardGateway#day_of_the_week}

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

Start of the maintenance window in UTC time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#time VpnWireguardGateway#time}

---

### VpnWireguardGatewayTimeouts <a name="VpnWireguardGatewayTimeouts" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.Initializer"></a>

```typescript
import { vpnWireguardGateway } from '@cdktf/provider-ionoscloud'

const vpnWireguardGatewayTimeouts: vpnWireguardGateway.VpnWireguardGatewayTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#create VpnWireguardGateway#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#default VpnWireguardGateway#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#delete VpnWireguardGateway#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#update VpnWireguardGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#create VpnWireguardGateway#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#default VpnWireguardGateway#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#delete VpnWireguardGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/vpn_wireguard_gateway#update VpnWireguardGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnWireguardGatewayConnectionsList <a name="VpnWireguardGatewayConnectionsList" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.Initializer"></a>

```typescript
import { vpnWireguardGateway } from '@cdktf/provider-ionoscloud'

new vpnWireguardGateway.VpnWireguardGatewayConnectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.get"></a>

```typescript
public get(index: number): VpnWireguardGatewayConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpnWireguardGatewayConnections[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a>[]

---


### VpnWireguardGatewayConnectionsOutputReference <a name="VpnWireguardGatewayConnectionsOutputReference" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer"></a>

```typescript
import { vpnWireguardGateway } from '@cdktf/provider-ionoscloud'

new vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.resetIpv4Cidr">resetIpv4Cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.resetIpv6Cidr">resetIpv6Cidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpv4Cidr` <a name="resetIpv4Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.resetIpv4Cidr"></a>

```typescript
public resetIpv4Cidr(): void
```

##### `resetIpv6Cidr` <a name="resetIpv6Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.resetIpv6Cidr"></a>

```typescript
public resetIpv6Cidr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.datacenterIdInput">datacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv4CidrInput">ipv4CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv6CidrInput">ipv6CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.lanIdInput">lanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.datacenterId">datacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv4Cidr">ipv4Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv6Cidr">ipv6Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.lanId">lanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.datacenterIdInput"></a>

```typescript
public readonly datacenterIdInput: string;
```

- *Type:* string

---

##### `ipv4CidrInput`<sup>Optional</sup> <a name="ipv4CidrInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv4CidrInput"></a>

```typescript
public readonly ipv4CidrInput: string;
```

- *Type:* string

---

##### `ipv6CidrInput`<sup>Optional</sup> <a name="ipv6CidrInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv6CidrInput"></a>

```typescript
public readonly ipv6CidrInput: string;
```

- *Type:* string

---

##### `lanIdInput`<sup>Optional</sup> <a name="lanIdInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.lanIdInput"></a>

```typescript
public readonly lanIdInput: string;
```

- *Type:* string

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

---

##### `ipv4Cidr`<sup>Required</sup> <a name="ipv4Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv4Cidr"></a>

```typescript
public readonly ipv4Cidr: string;
```

- *Type:* string

---

##### `ipv6Cidr`<sup>Required</sup> <a name="ipv6Cidr" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.ipv6Cidr"></a>

```typescript
public readonly ipv6Cidr: string;
```

- *Type:* string

---

##### `lanId`<sup>Required</sup> <a name="lanId" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.lanId"></a>

```typescript
public readonly lanId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpnWireguardGatewayConnections;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayConnections">VpnWireguardGatewayConnections</a>

---


### VpnWireguardGatewayMaintenanceWindowOutputReference <a name="VpnWireguardGatewayMaintenanceWindowOutputReference" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { vpnWireguardGateway } from '@cdktf/provider-ionoscloud'

new vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.dayOfTheWeekInput">dayOfTheWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.timeInput">timeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.dayOfTheWeek">dayOfTheWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow">VpnWireguardGatewayMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfTheWeekInput`<sup>Optional</sup> <a name="dayOfTheWeekInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.dayOfTheWeekInput"></a>

```typescript
public readonly dayOfTheWeekInput: string;
```

- *Type:* string

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.timeInput"></a>

```typescript
public readonly timeInput: string;
```

- *Type:* string

---

##### `dayOfTheWeek`<sup>Required</sup> <a name="dayOfTheWeek" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.dayOfTheWeek"></a>

```typescript
public readonly dayOfTheWeek: string;
```

- *Type:* string

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpnWireguardGatewayMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayMaintenanceWindow">VpnWireguardGatewayMaintenanceWindow</a>

---


### VpnWireguardGatewayTimeoutsOutputReference <a name="VpnWireguardGatewayTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.Initializer"></a>

```typescript
import { vpnWireguardGateway } from '@cdktf/provider-ionoscloud'

new vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts">VpnWireguardGatewayTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpnWireguardGatewayTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vpnWireguardGateway.VpnWireguardGatewayTimeouts">VpnWireguardGatewayTimeouts</a>

---



