# `applicationLoadbalancer` Submodule <a name="`applicationLoadbalancer` Submodule" id="@cdktf/provider-ionoscloud.applicationLoadbalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationLoadbalancer <a name="ApplicationLoadbalancer" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer"></a>

Represents a {@link https://www.terraform.io/docs/providers/ionoscloud/r/application_loadbalancer ionoscloud_application_loadbalancer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer"></a>

```typescript
import { applicationLoadbalancer } from '@cdktf/provider-ionoscloud'

new applicationLoadbalancer.ApplicationLoadbalancer(scope: Construct, id: string, config: ApplicationLoadbalancerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig">ApplicationLoadbalancerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig">ApplicationLoadbalancerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetIps">resetIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetLbPrivateIps">resetLbPrivateIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.putTimeouts"></a>

```typescript
public putTimeouts(value: ApplicationLoadbalancerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts">ApplicationLoadbalancerTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIps` <a name="resetIps" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetIps"></a>

```typescript
public resetIps(): void
```

##### `resetLbPrivateIps` <a name="resetLbPrivateIps" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetLbPrivateIps"></a>

```typescript
public resetLbPrivateIps(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isConstruct"></a>

```typescript
import { applicationLoadbalancer } from '@cdktf/provider-ionoscloud'

applicationLoadbalancer.ApplicationLoadbalancer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isTerraformElement"></a>

```typescript
import { applicationLoadbalancer } from '@cdktf/provider-ionoscloud'

applicationLoadbalancer.ApplicationLoadbalancer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isTerraformResource"></a>

```typescript
import { applicationLoadbalancer } from '@cdktf/provider-ionoscloud'

applicationLoadbalancer.ApplicationLoadbalancer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference">ApplicationLoadbalancerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.datacenterIdInput">datacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.ipsInput">ipsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.lbPrivateIpsInput">lbPrivateIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.listenerLanInput">listenerLanInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.targetLanInput">targetLanInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts">ApplicationLoadbalancerTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.datacenterId">datacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.ips">ips</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.lbPrivateIps">lbPrivateIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.listenerLan">listenerLan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.targetLan">targetLan</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationLoadbalancerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference">ApplicationLoadbalancerTimeoutsOutputReference</a>

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.datacenterIdInput"></a>

```typescript
public readonly datacenterIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipsInput`<sup>Optional</sup> <a name="ipsInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.ipsInput"></a>

```typescript
public readonly ipsInput: string[];
```

- *Type:* string[]

---

##### `lbPrivateIpsInput`<sup>Optional</sup> <a name="lbPrivateIpsInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.lbPrivateIpsInput"></a>

```typescript
public readonly lbPrivateIpsInput: string[];
```

- *Type:* string[]

---

##### `listenerLanInput`<sup>Optional</sup> <a name="listenerLanInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.listenerLanInput"></a>

```typescript
public readonly listenerLanInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `targetLanInput`<sup>Optional</sup> <a name="targetLanInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.targetLanInput"></a>

```typescript
public readonly targetLanInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ApplicationLoadbalancerTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts">ApplicationLoadbalancerTimeouts</a> | cdktf.IResolvable

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.ips"></a>

```typescript
public readonly ips: string[];
```

- *Type:* string[]

---

##### `lbPrivateIps`<sup>Required</sup> <a name="lbPrivateIps" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.lbPrivateIps"></a>

```typescript
public readonly lbPrivateIps: string[];
```

- *Type:* string[]

---

##### `listenerLan`<sup>Required</sup> <a name="listenerLan" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.listenerLan"></a>

```typescript
public readonly listenerLan: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `targetLan`<sup>Required</sup> <a name="targetLan" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.targetLan"></a>

```typescript
public readonly targetLan: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationLoadbalancerConfig <a name="ApplicationLoadbalancerConfig" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.Initializer"></a>

```typescript
import { applicationLoadbalancer } from '@cdktf/provider-ionoscloud'

const applicationLoadbalancerConfig: applicationLoadbalancer.ApplicationLoadbalancerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.datacenterId">datacenterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/application_loadbalancer#datacenter_id ApplicationLoadbalancer#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.listenerLan">listenerLan</a></code> | <code>number</code> | ID of the listening (inbound) LAN. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.name">name</a></code> | <code>string</code> | The name of the Application Load Balancer. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.targetLan">targetLan</a></code> | <code>number</code> | ID of the balanced private target LAN (outbound). |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/application_loadbalancer#id ApplicationLoadbalancer#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.ips">ips</a></code> | <code>string[]</code> | Collection of the Application Load Balancer IP addresses. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.lbPrivateIps">lbPrivateIps</a></code> | <code>string[]</code> | Collection of private IP addresses with the subnet mask of the Application Load Balancer. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts">ApplicationLoadbalancerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/application_loadbalancer#datacenter_id ApplicationLoadbalancer#datacenter_id}.

---

##### `listenerLan`<sup>Required</sup> <a name="listenerLan" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.listenerLan"></a>

```typescript
public readonly listenerLan: number;
```

- *Type:* number

ID of the listening (inbound) LAN.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/application_loadbalancer#listener_lan ApplicationLoadbalancer#listener_lan}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Application Load Balancer.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/application_loadbalancer#name ApplicationLoadbalancer#name}

---

##### `targetLan`<sup>Required</sup> <a name="targetLan" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.targetLan"></a>

```typescript
public readonly targetLan: number;
```

- *Type:* number

ID of the balanced private target LAN (outbound).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/application_loadbalancer#target_lan ApplicationLoadbalancer#target_lan}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/application_loadbalancer#id ApplicationLoadbalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ips`<sup>Optional</sup> <a name="ips" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.ips"></a>

```typescript
public readonly ips: string[];
```

- *Type:* string[]

Collection of the Application Load Balancer IP addresses.

(Inbound and outbound) IPs of the listenerLan are customer-reserved public IPs for the public Load Balancers, and private IPs for the private Load Balancers.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/application_loadbalancer#ips ApplicationLoadbalancer#ips}

---

##### `lbPrivateIps`<sup>Optional</sup> <a name="lbPrivateIps" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.lbPrivateIps"></a>

```typescript
public readonly lbPrivateIps: string[];
```

- *Type:* string[]

Collection of private IP addresses with the subnet mask of the Application Load Balancer.

IPs must contain valid a subnet mask. If no IP is provided, the system will generate an IP with /24 subnet.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/application_loadbalancer#lb_private_ips ApplicationLoadbalancer#lb_private_ips}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationLoadbalancerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts">ApplicationLoadbalancerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/application_loadbalancer#timeouts ApplicationLoadbalancer#timeouts}

---

### ApplicationLoadbalancerTimeouts <a name="ApplicationLoadbalancerTimeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.Initializer"></a>

```typescript
import { applicationLoadbalancer } from '@cdktf/provider-ionoscloud'

const applicationLoadbalancerTimeouts: applicationLoadbalancer.ApplicationLoadbalancerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/application_loadbalancer#create ApplicationLoadbalancer#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/application_loadbalancer#default ApplicationLoadbalancer#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/application_loadbalancer#delete ApplicationLoadbalancer#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/application_loadbalancer#update ApplicationLoadbalancer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/application_loadbalancer#create ApplicationLoadbalancer#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/application_loadbalancer#default ApplicationLoadbalancer#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/application_loadbalancer#delete ApplicationLoadbalancer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/application_loadbalancer#update ApplicationLoadbalancer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationLoadbalancerTimeoutsOutputReference <a name="ApplicationLoadbalancerTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.Initializer"></a>

```typescript
import { applicationLoadbalancer } from '@cdktf/provider-ionoscloud'

new applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts">ApplicationLoadbalancerTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApplicationLoadbalancerTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts">ApplicationLoadbalancerTimeouts</a> | cdktf.IResolvable

---


