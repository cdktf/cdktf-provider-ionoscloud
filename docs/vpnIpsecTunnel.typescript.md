# `vpnIpsecTunnel` Submodule <a name="`vpnIpsecTunnel` Submodule" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnIpsecTunnel <a name="VpnIpsecTunnel" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel ionoscloud_vpn_ipsec_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer"></a>

```typescript
import { vpnIpsecTunnel } from '@cdktf/provider-ionoscloud'

new vpnIpsecTunnel.VpnIpsecTunnel(scope: Construct, id: string, config: VpnIpsecTunnelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig">VpnIpsecTunnelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig">VpnIpsecTunnelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putAuth">putAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putEsp">putEsp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putIke">putIke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuth` <a name="putAuth" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putAuth"></a>

```typescript
public putAuth(value: VpnIpsecTunnelAuth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth">VpnIpsecTunnelAuth</a>

---

##### `putEsp` <a name="putEsp" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putEsp"></a>

```typescript
public putEsp(value: IResolvable | VpnIpsecTunnelEsp[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putEsp.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp">VpnIpsecTunnelEsp</a>[]

---

##### `putIke` <a name="putIke" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putIke"></a>

```typescript
public putIke(value: VpnIpsecTunnelIke): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putIke.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke">VpnIpsecTunnelIke</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putTimeouts"></a>

```typescript
public putTimeouts(value: VpnIpsecTunnelTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts">VpnIpsecTunnelTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpnIpsecTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isConstruct"></a>

```typescript
import { vpnIpsecTunnel } from '@cdktf/provider-ionoscloud'

vpnIpsecTunnel.VpnIpsecTunnel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isTerraformElement"></a>

```typescript
import { vpnIpsecTunnel } from '@cdktf/provider-ionoscloud'

vpnIpsecTunnel.VpnIpsecTunnel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isTerraformResource"></a>

```typescript
import { vpnIpsecTunnel } from '@cdktf/provider-ionoscloud'

vpnIpsecTunnel.VpnIpsecTunnel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.generateConfigForImport"></a>

```typescript
import { vpnIpsecTunnel } from '@cdktf/provider-ionoscloud'

vpnIpsecTunnel.VpnIpsecTunnel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VpnIpsecTunnel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpnIpsecTunnel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpnIpsecTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpnIpsecTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.auth">auth</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference">VpnIpsecTunnelAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.esp">esp</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList">VpnIpsecTunnelEspList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.ike">ike</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference">VpnIpsecTunnelIkeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference">VpnIpsecTunnelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.authInput">authInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth">VpnIpsecTunnelAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.cloudNetworkCidrsInput">cloudNetworkCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.espInput">espInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp">VpnIpsecTunnelEsp</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.gatewayIdInput">gatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.ikeInput">ikeInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke">VpnIpsecTunnelIke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.peerNetworkCidrsInput">peerNetworkCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.remoteHostInput">remoteHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts">VpnIpsecTunnelTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.cloudNetworkCidrs">cloudNetworkCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.peerNetworkCidrs">peerNetworkCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.remoteHost">remoteHost</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `auth`<sup>Required</sup> <a name="auth" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.auth"></a>

```typescript
public readonly auth: VpnIpsecTunnelAuthOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference">VpnIpsecTunnelAuthOutputReference</a>

---

##### `esp`<sup>Required</sup> <a name="esp" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.esp"></a>

```typescript
public readonly esp: VpnIpsecTunnelEspList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList">VpnIpsecTunnelEspList</a>

---

##### `ike`<sup>Required</sup> <a name="ike" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.ike"></a>

```typescript
public readonly ike: VpnIpsecTunnelIkeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference">VpnIpsecTunnelIkeOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.timeouts"></a>

```typescript
public readonly timeouts: VpnIpsecTunnelTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference">VpnIpsecTunnelTimeoutsOutputReference</a>

---

##### `authInput`<sup>Optional</sup> <a name="authInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.authInput"></a>

```typescript
public readonly authInput: VpnIpsecTunnelAuth;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth">VpnIpsecTunnelAuth</a>

---

##### `cloudNetworkCidrsInput`<sup>Optional</sup> <a name="cloudNetworkCidrsInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.cloudNetworkCidrsInput"></a>

```typescript
public readonly cloudNetworkCidrsInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `espInput`<sup>Optional</sup> <a name="espInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.espInput"></a>

```typescript
public readonly espInput: IResolvable | VpnIpsecTunnelEsp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp">VpnIpsecTunnelEsp</a>[]

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.gatewayIdInput"></a>

```typescript
public readonly gatewayIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ikeInput`<sup>Optional</sup> <a name="ikeInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.ikeInput"></a>

```typescript
public readonly ikeInput: VpnIpsecTunnelIke;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke">VpnIpsecTunnelIke</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `peerNetworkCidrsInput`<sup>Optional</sup> <a name="peerNetworkCidrsInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.peerNetworkCidrsInput"></a>

```typescript
public readonly peerNetworkCidrsInput: string[];
```

- *Type:* string[]

---

##### `remoteHostInput`<sup>Optional</sup> <a name="remoteHostInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.remoteHostInput"></a>

```typescript
public readonly remoteHostInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VpnIpsecTunnelTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts">VpnIpsecTunnelTimeouts</a>

---

##### `cloudNetworkCidrs`<sup>Required</sup> <a name="cloudNetworkCidrs" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.cloudNetworkCidrs"></a>

```typescript
public readonly cloudNetworkCidrs: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `peerNetworkCidrs`<sup>Required</sup> <a name="peerNetworkCidrs" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.peerNetworkCidrs"></a>

```typescript
public readonly peerNetworkCidrs: string[];
```

- *Type:* string[]

---

##### `remoteHost`<sup>Required</sup> <a name="remoteHost" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.remoteHost"></a>

```typescript
public readonly remoteHost: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpnIpsecTunnelAuth <a name="VpnIpsecTunnelAuth" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth.Initializer"></a>

```typescript
import { vpnIpsecTunnel } from '@cdktf/provider-ionoscloud'

const vpnIpsecTunnelAuth: vpnIpsecTunnel.VpnIpsecTunnelAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth.property.method">method</a></code> | <code>string</code> | The Authentication Method to use for IPSec Authentication. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth.property.pskKey">pskKey</a></code> | <code>string</code> | The Pre-Shared Key to use for IPSec Authentication. Note: Required if method is PSK. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

The Authentication Method to use for IPSec Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#method VpnIpsecTunnel#method}

---

##### `pskKey`<sup>Optional</sup> <a name="pskKey" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth.property.pskKey"></a>

```typescript
public readonly pskKey: string;
```

- *Type:* string

The Pre-Shared Key to use for IPSec Authentication. Note: Required if method is PSK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#psk_key VpnIpsecTunnel#psk_key}

---

### VpnIpsecTunnelConfig <a name="VpnIpsecTunnelConfig" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.Initializer"></a>

```typescript
import { vpnIpsecTunnel } from '@cdktf/provider-ionoscloud'

const vpnIpsecTunnelConfig: vpnIpsecTunnel.VpnIpsecTunnelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.auth">auth</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth">VpnIpsecTunnelAuth</a></code> | auth block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.cloudNetworkCidrs">cloudNetworkCidrs</a></code> | <code>string[]</code> | The network CIDRs on the "Left" side that are allowed to connect to the IPSec tunnel, i.e. the CIDRs within your IONOS Cloud LAN. Specify "0.0.0.0/0" or "::/0" for all addresses. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.esp">esp</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp">VpnIpsecTunnelEsp</a>[]</code> | esp block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.gatewayId">gatewayId</a></code> | <code>string</code> | The ID of the IPSec Gateway that the tunnel belongs to. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.ike">ike</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke">VpnIpsecTunnelIke</a></code> | ike block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.name">name</a></code> | <code>string</code> | The human-readable name of your IPSec Gateway Tunnel. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.peerNetworkCidrs">peerNetworkCidrs</a></code> | <code>string[]</code> | The network CIDRs on the "Right" side that are allowed to connect to the IPSec tunnel. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.remoteHost">remoteHost</a></code> | <code>string</code> | The remote peer host fully qualified domain name or public IPV4 IP to connect to. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.description">description</a></code> | <code>string</code> | The human-readable description of your IPSec Gateway Tunnel. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#id VpnIpsecTunnel#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.location">location</a></code> | <code>string</code> | The location of the IPSec Gateway Tunnel. Supported locations: de/fra, de/fra/2, de/txl, es/vit, gb/bhx, gb/lhr, us/ewr, us/las, us/mci, fr/par. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts">VpnIpsecTunnelTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `auth`<sup>Required</sup> <a name="auth" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.auth"></a>

```typescript
public readonly auth: VpnIpsecTunnelAuth;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth">VpnIpsecTunnelAuth</a>

auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#auth VpnIpsecTunnel#auth}

---

##### `cloudNetworkCidrs`<sup>Required</sup> <a name="cloudNetworkCidrs" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.cloudNetworkCidrs"></a>

```typescript
public readonly cloudNetworkCidrs: string[];
```

- *Type:* string[]

The network CIDRs on the "Left" side that are allowed to connect to the IPSec tunnel, i.e. the CIDRs within your IONOS Cloud LAN. Specify "0.0.0.0/0" or "::/0" for all addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#cloud_network_cidrs VpnIpsecTunnel#cloud_network_cidrs}

---

##### `esp`<sup>Required</sup> <a name="esp" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.esp"></a>

```typescript
public readonly esp: IResolvable | VpnIpsecTunnelEsp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp">VpnIpsecTunnelEsp</a>[]

esp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#esp VpnIpsecTunnel#esp}

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The ID of the IPSec Gateway that the tunnel belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#gateway_id VpnIpsecTunnel#gateway_id}

---

##### `ike`<sup>Required</sup> <a name="ike" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.ike"></a>

```typescript
public readonly ike: VpnIpsecTunnelIke;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke">VpnIpsecTunnelIke</a>

ike block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#ike VpnIpsecTunnel#ike}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The human-readable name of your IPSec Gateway Tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#name VpnIpsecTunnel#name}

---

##### `peerNetworkCidrs`<sup>Required</sup> <a name="peerNetworkCidrs" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.peerNetworkCidrs"></a>

```typescript
public readonly peerNetworkCidrs: string[];
```

- *Type:* string[]

The network CIDRs on the "Right" side that are allowed to connect to the IPSec tunnel.

Specify "0.0.0.0/0" or "::/0" for all addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#peer_network_cidrs VpnIpsecTunnel#peer_network_cidrs}

---

##### `remoteHost`<sup>Required</sup> <a name="remoteHost" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.remoteHost"></a>

```typescript
public readonly remoteHost: string;
```

- *Type:* string

The remote peer host fully qualified domain name or public IPV4 IP to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#remote_host VpnIpsecTunnel#remote_host}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The human-readable description of your IPSec Gateway Tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#description VpnIpsecTunnel#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#id VpnIpsecTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the IPSec Gateway Tunnel. Supported locations: de/fra, de/fra/2, de/txl, es/vit, gb/bhx, gb/lhr, us/ewr, us/las, us/mci, fr/par.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#location VpnIpsecTunnel#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VpnIpsecTunnelTimeouts;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts">VpnIpsecTunnelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#timeouts VpnIpsecTunnel#timeouts}

---

### VpnIpsecTunnelEsp <a name="VpnIpsecTunnelEsp" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.Initializer"></a>

```typescript
import { vpnIpsecTunnel } from '@cdktf/provider-ionoscloud'

const vpnIpsecTunnelEsp: vpnIpsecTunnel.VpnIpsecTunnelEsp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.diffieHellmanGroup">diffieHellmanGroup</a></code> | <code>string</code> | The Diffie-Hellman Group to use for IPSec Encryption. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | The encryption algorithm to use for IPSec Encryption. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.integrityAlgorithm">integrityAlgorithm</a></code> | <code>string</code> | The integrity algorithm to use for IPSec Encryption. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.lifetime">lifetime</a></code> | <code>number</code> | The phase lifetime in seconds. |

---

##### `diffieHellmanGroup`<sup>Optional</sup> <a name="diffieHellmanGroup" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.diffieHellmanGroup"></a>

```typescript
public readonly diffieHellmanGroup: string;
```

- *Type:* string

The Diffie-Hellman Group to use for IPSec Encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#diffie_hellman_group VpnIpsecTunnel#diffie_hellman_group}

---

##### `encryptionAlgorithm`<sup>Optional</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

The encryption algorithm to use for IPSec Encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#encryption_algorithm VpnIpsecTunnel#encryption_algorithm}

---

##### `integrityAlgorithm`<sup>Optional</sup> <a name="integrityAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.integrityAlgorithm"></a>

```typescript
public readonly integrityAlgorithm: string;
```

- *Type:* string

The integrity algorithm to use for IPSec Encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#integrity_algorithm VpnIpsecTunnel#integrity_algorithm}

---

##### `lifetime`<sup>Optional</sup> <a name="lifetime" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.lifetime"></a>

```typescript
public readonly lifetime: number;
```

- *Type:* number

The phase lifetime in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#lifetime VpnIpsecTunnel#lifetime}

---

### VpnIpsecTunnelIke <a name="VpnIpsecTunnelIke" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.Initializer"></a>

```typescript
import { vpnIpsecTunnel } from '@cdktf/provider-ionoscloud'

const vpnIpsecTunnelIke: vpnIpsecTunnel.VpnIpsecTunnelIke = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.diffieHellmanGroup">diffieHellmanGroup</a></code> | <code>string</code> | The Diffie-Hellman Group to use for IPSec Encryption. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | The encryption algorithm to use for IPSec Encryption. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.integrityAlgorithm">integrityAlgorithm</a></code> | <code>string</code> | The integrity algorithm to use for IPSec Encryption. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.lifetime">lifetime</a></code> | <code>number</code> | The phase lifetime in seconds. |

---

##### `diffieHellmanGroup`<sup>Optional</sup> <a name="diffieHellmanGroup" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.diffieHellmanGroup"></a>

```typescript
public readonly diffieHellmanGroup: string;
```

- *Type:* string

The Diffie-Hellman Group to use for IPSec Encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#diffie_hellman_group VpnIpsecTunnel#diffie_hellman_group}

---

##### `encryptionAlgorithm`<sup>Optional</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

The encryption algorithm to use for IPSec Encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#encryption_algorithm VpnIpsecTunnel#encryption_algorithm}

---

##### `integrityAlgorithm`<sup>Optional</sup> <a name="integrityAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.integrityAlgorithm"></a>

```typescript
public readonly integrityAlgorithm: string;
```

- *Type:* string

The integrity algorithm to use for IPSec Encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#integrity_algorithm VpnIpsecTunnel#integrity_algorithm}

---

##### `lifetime`<sup>Optional</sup> <a name="lifetime" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.lifetime"></a>

```typescript
public readonly lifetime: number;
```

- *Type:* number

The phase lifetime in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#lifetime VpnIpsecTunnel#lifetime}

---

### VpnIpsecTunnelTimeouts <a name="VpnIpsecTunnelTimeouts" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.Initializer"></a>

```typescript
import { vpnIpsecTunnel } from '@cdktf/provider-ionoscloud'

const vpnIpsecTunnelTimeouts: vpnIpsecTunnel.VpnIpsecTunnelTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#create VpnIpsecTunnel#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#default VpnIpsecTunnel#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#delete VpnIpsecTunnel#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#update VpnIpsecTunnel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#create VpnIpsecTunnel#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#default VpnIpsecTunnel#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#delete VpnIpsecTunnel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.14/docs/resources/vpn_ipsec_tunnel#update VpnIpsecTunnel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnIpsecTunnelAuthOutputReference <a name="VpnIpsecTunnelAuthOutputReference" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.Initializer"></a>

```typescript
import { vpnIpsecTunnel } from '@cdktf/provider-ionoscloud'

new vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.resetPskKey">resetPskKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetPskKey` <a name="resetPskKey" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.resetPskKey"></a>

```typescript
public resetPskKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.pskKeyInput">pskKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.pskKey">pskKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth">VpnIpsecTunnelAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `pskKeyInput`<sup>Optional</sup> <a name="pskKeyInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.pskKeyInput"></a>

```typescript
public readonly pskKeyInput: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `pskKey`<sup>Required</sup> <a name="pskKey" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.pskKey"></a>

```typescript
public readonly pskKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpnIpsecTunnelAuth;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth">VpnIpsecTunnelAuth</a>

---


### VpnIpsecTunnelEspList <a name="VpnIpsecTunnelEspList" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.Initializer"></a>

```typescript
import { vpnIpsecTunnel } from '@cdktf/provider-ionoscloud'

new vpnIpsecTunnel.VpnIpsecTunnelEspList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.get"></a>

```typescript
public get(index: number): VpnIpsecTunnelEspOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp">VpnIpsecTunnelEsp</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpnIpsecTunnelEsp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp">VpnIpsecTunnelEsp</a>[]

---


### VpnIpsecTunnelEspOutputReference <a name="VpnIpsecTunnelEspOutputReference" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer"></a>

```typescript
import { vpnIpsecTunnel } from '@cdktf/provider-ionoscloud'

new vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetDiffieHellmanGroup">resetDiffieHellmanGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetEncryptionAlgorithm">resetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetIntegrityAlgorithm">resetIntegrityAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetLifetime">resetLifetime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiffieHellmanGroup` <a name="resetDiffieHellmanGroup" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetDiffieHellmanGroup"></a>

```typescript
public resetDiffieHellmanGroup(): void
```

##### `resetEncryptionAlgorithm` <a name="resetEncryptionAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetEncryptionAlgorithm"></a>

```typescript
public resetEncryptionAlgorithm(): void
```

##### `resetIntegrityAlgorithm` <a name="resetIntegrityAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetIntegrityAlgorithm"></a>

```typescript
public resetIntegrityAlgorithm(): void
```

##### `resetLifetime` <a name="resetLifetime" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetLifetime"></a>

```typescript
public resetLifetime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.diffieHellmanGroupInput">diffieHellmanGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.encryptionAlgorithmInput">encryptionAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.integrityAlgorithmInput">integrityAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.lifetimeInput">lifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.diffieHellmanGroup">diffieHellmanGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.integrityAlgorithm">integrityAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.lifetime">lifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp">VpnIpsecTunnelEsp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diffieHellmanGroupInput`<sup>Optional</sup> <a name="diffieHellmanGroupInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.diffieHellmanGroupInput"></a>

```typescript
public readonly diffieHellmanGroupInput: string;
```

- *Type:* string

---

##### `encryptionAlgorithmInput`<sup>Optional</sup> <a name="encryptionAlgorithmInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.encryptionAlgorithmInput"></a>

```typescript
public readonly encryptionAlgorithmInput: string;
```

- *Type:* string

---

##### `integrityAlgorithmInput`<sup>Optional</sup> <a name="integrityAlgorithmInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.integrityAlgorithmInput"></a>

```typescript
public readonly integrityAlgorithmInput: string;
```

- *Type:* string

---

##### `lifetimeInput`<sup>Optional</sup> <a name="lifetimeInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.lifetimeInput"></a>

```typescript
public readonly lifetimeInput: number;
```

- *Type:* number

---

##### `diffieHellmanGroup`<sup>Required</sup> <a name="diffieHellmanGroup" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.diffieHellmanGroup"></a>

```typescript
public readonly diffieHellmanGroup: string;
```

- *Type:* string

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

---

##### `integrityAlgorithm`<sup>Required</sup> <a name="integrityAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.integrityAlgorithm"></a>

```typescript
public readonly integrityAlgorithm: string;
```

- *Type:* string

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.lifetime"></a>

```typescript
public readonly lifetime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpnIpsecTunnelEsp;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp">VpnIpsecTunnelEsp</a>

---


### VpnIpsecTunnelIkeOutputReference <a name="VpnIpsecTunnelIkeOutputReference" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.Initializer"></a>

```typescript
import { vpnIpsecTunnel } from '@cdktf/provider-ionoscloud'

new vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetDiffieHellmanGroup">resetDiffieHellmanGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetEncryptionAlgorithm">resetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetIntegrityAlgorithm">resetIntegrityAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetLifetime">resetLifetime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiffieHellmanGroup` <a name="resetDiffieHellmanGroup" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetDiffieHellmanGroup"></a>

```typescript
public resetDiffieHellmanGroup(): void
```

##### `resetEncryptionAlgorithm` <a name="resetEncryptionAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetEncryptionAlgorithm"></a>

```typescript
public resetEncryptionAlgorithm(): void
```

##### `resetIntegrityAlgorithm` <a name="resetIntegrityAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetIntegrityAlgorithm"></a>

```typescript
public resetIntegrityAlgorithm(): void
```

##### `resetLifetime` <a name="resetLifetime" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetLifetime"></a>

```typescript
public resetLifetime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.diffieHellmanGroupInput">diffieHellmanGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.encryptionAlgorithmInput">encryptionAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.integrityAlgorithmInput">integrityAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.lifetimeInput">lifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.diffieHellmanGroup">diffieHellmanGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.integrityAlgorithm">integrityAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.lifetime">lifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke">VpnIpsecTunnelIke</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diffieHellmanGroupInput`<sup>Optional</sup> <a name="diffieHellmanGroupInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.diffieHellmanGroupInput"></a>

```typescript
public readonly diffieHellmanGroupInput: string;
```

- *Type:* string

---

##### `encryptionAlgorithmInput`<sup>Optional</sup> <a name="encryptionAlgorithmInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.encryptionAlgorithmInput"></a>

```typescript
public readonly encryptionAlgorithmInput: string;
```

- *Type:* string

---

##### `integrityAlgorithmInput`<sup>Optional</sup> <a name="integrityAlgorithmInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.integrityAlgorithmInput"></a>

```typescript
public readonly integrityAlgorithmInput: string;
```

- *Type:* string

---

##### `lifetimeInput`<sup>Optional</sup> <a name="lifetimeInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.lifetimeInput"></a>

```typescript
public readonly lifetimeInput: number;
```

- *Type:* number

---

##### `diffieHellmanGroup`<sup>Required</sup> <a name="diffieHellmanGroup" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.diffieHellmanGroup"></a>

```typescript
public readonly diffieHellmanGroup: string;
```

- *Type:* string

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

---

##### `integrityAlgorithm`<sup>Required</sup> <a name="integrityAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.integrityAlgorithm"></a>

```typescript
public readonly integrityAlgorithm: string;
```

- *Type:* string

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.lifetime"></a>

```typescript
public readonly lifetime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpnIpsecTunnelIke;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke">VpnIpsecTunnelIke</a>

---


### VpnIpsecTunnelTimeoutsOutputReference <a name="VpnIpsecTunnelTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.Initializer"></a>

```typescript
import { vpnIpsecTunnel } from '@cdktf/provider-ionoscloud'

new vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts">VpnIpsecTunnelTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpnIpsecTunnelTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts">VpnIpsecTunnelTimeouts</a>

---



