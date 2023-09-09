# `data_ionoscloud_private_crossconnect`

Refer to the Terraform Registory for docs: [`data_ionoscloud_private_crossconnect`](https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/private_crossconnect).

# `dataIonoscloudPrivateCrossconnect` Submodule <a name="`dataIonoscloudPrivateCrossconnect` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudPrivateCrossconnect <a name="DataIonoscloudPrivateCrossconnect" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/private_crossconnect ionoscloud_private_crossconnect}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer"></a>

```typescript
import { dataIonoscloudPrivateCrossconnect } from '@cdktf/provider-ionoscloud'

new dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect(scope: Construct, id: string, config?: DataIonoscloudPrivateCrossconnectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig">DataIonoscloudPrivateCrossconnectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig">DataIonoscloudPrivateCrossconnectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.putTimeouts"></a>

```typescript
public putTimeouts(value: DataIonoscloudPrivateCrossconnectTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts">DataIonoscloudPrivateCrossconnectTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.isConstruct"></a>

```typescript
import { dataIonoscloudPrivateCrossconnect } from '@cdktf/provider-ionoscloud'

dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.isTerraformElement"></a>

```typescript
import { dataIonoscloudPrivateCrossconnect } from '@cdktf/provider-ionoscloud'

dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.isTerraformDataSource"></a>

```typescript
import { dataIonoscloudPrivateCrossconnect } from '@cdktf/provider-ionoscloud'

dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.connectableDatacenters">connectableDatacenters</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList">DataIonoscloudPrivateCrossconnectConnectableDatacentersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.peers">peers</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList">DataIonoscloudPrivateCrossconnectPeersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference">DataIonoscloudPrivateCrossconnectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts">DataIonoscloudPrivateCrossconnectTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `connectableDatacenters`<sup>Required</sup> <a name="connectableDatacenters" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.connectableDatacenters"></a>

```typescript
public readonly connectableDatacenters: DataIonoscloudPrivateCrossconnectConnectableDatacentersList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList">DataIonoscloudPrivateCrossconnectConnectableDatacentersList</a>

---

##### `peers`<sup>Required</sup> <a name="peers" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.peers"></a>

```typescript
public readonly peers: DataIonoscloudPrivateCrossconnectPeersList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList">DataIonoscloudPrivateCrossconnectPeersList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.timeouts"></a>

```typescript
public readonly timeouts: DataIonoscloudPrivateCrossconnectTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference">DataIonoscloudPrivateCrossconnectTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataIonoscloudPrivateCrossconnectTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts">DataIonoscloudPrivateCrossconnectTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnect.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudPrivateCrossconnectConfig <a name="DataIonoscloudPrivateCrossconnectConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.Initializer"></a>

```typescript
import { dataIonoscloudPrivateCrossconnect } from '@cdktf/provider-ionoscloud'

const dataIonoscloudPrivateCrossconnectConfig: dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/private_crossconnect#description DataIonoscloudPrivateCrossconnect#description}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/private_crossconnect#id DataIonoscloudPrivateCrossconnect#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/private_crossconnect#name DataIonoscloudPrivateCrossconnect#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts">DataIonoscloudPrivateCrossconnectTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/private_crossconnect#description DataIonoscloudPrivateCrossconnect#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/private_crossconnect#id DataIonoscloudPrivateCrossconnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/private_crossconnect#name DataIonoscloudPrivateCrossconnect#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataIonoscloudPrivateCrossconnectTimeouts;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts">DataIonoscloudPrivateCrossconnectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/private_crossconnect#timeouts DataIonoscloudPrivateCrossconnect#timeouts}

---

### DataIonoscloudPrivateCrossconnectConnectableDatacenters <a name="DataIonoscloudPrivateCrossconnectConnectableDatacenters" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacenters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacenters.Initializer"></a>

```typescript
import { dataIonoscloudPrivateCrossconnect } from '@cdktf/provider-ionoscloud'

const dataIonoscloudPrivateCrossconnectConnectableDatacenters: dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacenters = { ... }
```


### DataIonoscloudPrivateCrossconnectPeers <a name="DataIonoscloudPrivateCrossconnectPeers" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeers.Initializer"></a>

```typescript
import { dataIonoscloudPrivateCrossconnect } from '@cdktf/provider-ionoscloud'

const dataIonoscloudPrivateCrossconnectPeers: dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeers = { ... }
```


### DataIonoscloudPrivateCrossconnectTimeouts <a name="DataIonoscloudPrivateCrossconnectTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts.Initializer"></a>

```typescript
import { dataIonoscloudPrivateCrossconnect } from '@cdktf/provider-ionoscloud'

const dataIonoscloudPrivateCrossconnectTimeouts: dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/private_crossconnect#create DataIonoscloudPrivateCrossconnect#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/private_crossconnect#default DataIonoscloudPrivateCrossconnect#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/private_crossconnect#delete DataIonoscloudPrivateCrossconnect#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/private_crossconnect#update DataIonoscloudPrivateCrossconnect#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/private_crossconnect#create DataIonoscloudPrivateCrossconnect#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/private_crossconnect#default DataIonoscloudPrivateCrossconnect#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/private_crossconnect#delete DataIonoscloudPrivateCrossconnect#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/private_crossconnect#update DataIonoscloudPrivateCrossconnect#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudPrivateCrossconnectConnectableDatacentersList <a name="DataIonoscloudPrivateCrossconnectConnectableDatacentersList" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.Initializer"></a>

```typescript
import { dataIonoscloudPrivateCrossconnect } from '@cdktf/provider-ionoscloud'

new dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.get"></a>

```typescript
public get(index: number): DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference <a name="DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudPrivateCrossconnect } from '@cdktf/provider-ionoscloud'

new dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacenters">DataIonoscloudPrivateCrossconnectConnectableDatacenters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacentersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataIonoscloudPrivateCrossconnectConnectableDatacenters;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectConnectableDatacenters">DataIonoscloudPrivateCrossconnectConnectableDatacenters</a>

---


### DataIonoscloudPrivateCrossconnectPeersList <a name="DataIonoscloudPrivateCrossconnectPeersList" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.Initializer"></a>

```typescript
import { dataIonoscloudPrivateCrossconnect } from '@cdktf/provider-ionoscloud'

new dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.get"></a>

```typescript
public get(index: number): DataIonoscloudPrivateCrossconnectPeersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataIonoscloudPrivateCrossconnectPeersOutputReference <a name="DataIonoscloudPrivateCrossconnectPeersOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudPrivateCrossconnect } from '@cdktf/provider-ionoscloud'

new dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.datacenterId">datacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.datacenterName">datacenterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.lanId">lanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.lanName">lanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeers">DataIonoscloudPrivateCrossconnectPeers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

---

##### `datacenterName`<sup>Required</sup> <a name="datacenterName" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.datacenterName"></a>

```typescript
public readonly datacenterName: string;
```

- *Type:* string

---

##### `lanId`<sup>Required</sup> <a name="lanId" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.lanId"></a>

```typescript
public readonly lanId: string;
```

- *Type:* string

---

##### `lanName`<sup>Required</sup> <a name="lanName" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.lanName"></a>

```typescript
public readonly lanName: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataIonoscloudPrivateCrossconnectPeers;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectPeers">DataIonoscloudPrivateCrossconnectPeers</a>

---


### DataIonoscloudPrivateCrossconnectTimeoutsOutputReference <a name="DataIonoscloudPrivateCrossconnectTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudPrivateCrossconnect } from '@cdktf/provider-ionoscloud'

new dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts">DataIonoscloudPrivateCrossconnectTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataIonoscloudPrivateCrossconnectTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataIonoscloudPrivateCrossconnect.DataIonoscloudPrivateCrossconnectTimeouts">DataIonoscloudPrivateCrossconnectTimeouts</a>

---



